import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, FlatList, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';

export default function FileSystem(props) {
    const [fileName, setFileName] = useState('');
    const [selectedFile, setSelectedFile] = useState({});

    useEffect(() => {
        if (props) {
            setFileName(props.data.fileRes.fileName);
            setSelectedFile(props.data.fileRes);
        }
    });

    requestExternalStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                title: 'My App Storage Permission',
                message: 'My App needs access to your storage ' + 'so you can save your photos'
            });
            return granted;
        } catch (err) {
            console.error('Failed to request permission ', err);
            return null;
        }
    };

    uploadFile = () => {
        const uri = decodeURIComponent(selectedFile.uri);
        const split = uri.split('/');
        const name = split.pop();
        const inbox = split.pop();

        const ref = firebase.storage().ref(`/random1/${name}`);
        ref.putFile(`${firebase.storage.Native.EXTERNAL_STORAGE_DIRECTORY_PATH}/${inbox}/${name}`)
            .then(data => {
                props.data.socket.emit('chat-client', {
                    mediaLink: data.downloadURL,
                    userId: 'user1',
                    mediaType: 'file',
                    mediaName: fileName
                });
                Actions.chat();
            })
            .catch(error => {
                console.log('error: ', error);
            });
    };
    this.requestExternalStoragePermission();
    const list = [{ name: 'item1' }, { name: 'item2' }];

    return (
        <View>
            <ListItem titleStyle={{ color: 'black', fontSize: 16 }} title={fileName}></ListItem>
            <View style={styles.container}>
                <TouchableOpacity onPress={uploadFile()}>
                    <Text style={styles.text}>SEND</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 15
    },
    text: {
        borderWidth: 1,
        padding: 15,
        borderColor: '#075e54',
        backgroundColor: '#075e54',
        color: 'white',
        borderRadius: 5,
        width: 100,
        textAlign: 'center'
    }
});
