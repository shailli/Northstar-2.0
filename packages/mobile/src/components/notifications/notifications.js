// Functions used for Firebase Notifications are stored here
import { AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';
import axios from 'axios';

export async function checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        getToken();
    } else {
        requestPermission();
        createNotificationListeners();
    }
}

createNotificationListeners = async () => {
    /*
   * Triggered when a particular notification has been received in foreground
   * */
    const notificationListener = await firebase.notifications().onNotification(notification => {
        const { title, body } = notification;
        showAlert(title, body);
    });

    /*
   * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
   * */
    const notificationOpenedListener = await firebase.notifications().onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        showAlert(title, body);
    });

    /*
   * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
   * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        showAlert(title, body);
    }
    /*
   * Triggered for data only payload in foreground
   * */
    const messageListener = firebase.messaging().onMessage(message => {
    //process data message
    // console.log(JSON.stringify(message))
    });
};

getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            // user has a device token
            console.log(fcmToken);
            axios({
                method:'post',
                url:'http://10.10.80.237:8080/api/registerdevice',
                data:{
                    userName:'Ganapati',
                    deviceId:fcmToken
                }
            })
                .then(res=>console.log(res)).catch(err=>console.log(err))
            await AsyncStorage.setItem('fcmToken', fcmToken);
        }
    }
    
    console.log('External FCMTOKEN',fcmToken);
}
requestPermission = async () => {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
        getToken();
    } catch (error) {
    // User has rejected permissions
    // console.log('permission rejected')
    }
};
