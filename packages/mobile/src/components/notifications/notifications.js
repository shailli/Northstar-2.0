// Functions used for Firebase Notifications are stored here
import { AsyncStorage, Alert } from 'react-native';
import firebase from 'react-native-firebase';
import axios from 'axios';

export async function checkPermission() {
  const enabled = await firebase.messaging().hasPermission();
  if (enabled) {
    getToken();
    createNotificationListeners();
  } else {
    requestPermission();
    createNotificationListeners();
  }
}

async function createNotificationListeners() {
  /*
   * Triggered when a particular notification has been received in foreground
   * */
  firebase.notifications().onNotification(function(notification) {
    const { title, body } = notification;
    showAlert(title, body);
  });

  /*
   * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
   * */
  firebase.notifications().onNotificationOpened(function(notificationOpen) {
    const { title, body } = notificationOpen.notification;
    showAlert(title, body);
  });

  /*
   * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
   * */
  let notificationOpen;
  notificationOpen = await firebase.notifications().getInitialNotification();
  if (notificationOpen) {
    const { title, body } = notificationOpen.notification;
    showAlert(title, body);
  }
  /*
   * Triggered for data only payload in foreground
   * */
  const messageListener = firebase.messaging().onMessage(message => {
    //process data message
    console.log(JSON.stringify(message));
  });
}

async function getToken() {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log(fcmToken);
  if (!fcmToken) {
    fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      // user has a device token
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8080/api/registerdevice',
        data: {
          userName: 'Ganapati',
          deviceId: fcmToken,
        },
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
  }

  console.log('External FCMTOKEN', fcmToken);
}
function showAlert(title, body) {
  Alert.alert(title, body, [{ text: 'OK', onPress: () => console.log('OK Pressed') }], { cancelable: false });
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
