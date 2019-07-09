import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, FlatList, Button }  from 'react-native';
import { ListItem } from 'react-native-elements';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import firebase from 'react-native-firebase'
import {Actions} from 'react-native-router-flux';

export default class FileSystem extends Component {
  state = {
    fileName: '',
    selectedFile: {}
  }

    componentDidMount() {    
      if(this.props) {
        this.setState({fileName: this.props.data.fileRes.fileName});
        this.setState({selectedFile: this.props.data.fileRes});
      }  
      // DocumentPicker.show({
      //   filetype: [DocumentPickerUtil.allFiles()],
      // },(error,res) => {
      //   // Android
      //   console.log(res);
      
        
        // const uri = decodeURIComponent(res.uri);
        // console.log(decodeURIComponent(res.uri));
        // const split = uri.split('/');
        // const name = split.pop();
        // const inbox = split.pop();
    
        // console.log(name, inbox)
        // const ref = firebase.storage().ref(`/random1/${name}`);
        // console.log(ref);
        //To delete file
        // ref.delete()
        //   .then(() => {
        //       // deleted
        //       console.log('deleted')
        //   })
        //   .catch((deleteError) => {
        //       console.log(deleteError)
        //   });

        //To upload file from loacal storage
        // ref
        // .putFile(
        //   `${firebase.storage.Native.EXTERNAL_STORAGE_DIRECTORY_PATH}/${inbox}/${name}`
        // )
        // .then(data => {console.log('success: ', data)})
        // .catch(error => {console.log('error: ', error)});

        // console.log('path here: ', firebase.storage.Native.EXTERNAL_STORAGE_DIRECTORY_PATH);

        //To download file to loacal storage
        // firebase
        // .storage()
        // .refFromURL('gs://piktorwhatsapp.appspot.com/random/relax.jpg')
        // .downloadFile(
        //   `${firebase.storage.Native.EXTERNAL_STORAGE_DIRECTORY_PATH}/ok.jpeg`
        // )
        // .then(data => {
        //   console.log(data);
        // })
        // .catch(err => {
        //   console.log(err);
        // });

        //To get metadata
        // firebase
        // .storage()
        // .ref('/random/relax.jpg')
        // .getMetadata()
        // .then((metadata) => {
        //     console.log(metadata.name);
        //     console.log(metadata.size);
        //     console.log(metadata.contentType);
        //     // etc
        // });

        //To get download url
        // const settableMetadata = {
        //   contentType: 'image/jpg',
        // };
        // firebase
        // .storage()
        // .ref('/random/relax.jpg')
        // .updateMetadata(settableMetadata)
        // .then((metadata) => {
        //     console.log(metadata.name);
        //     console.log(metadata.size);
        //     console.log(metadata.contentType);
        //     // etc
        // });
      // });
    }

    requestExternalStoragePermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'My App Storage Permission',
            message: 'My App needs access to your storage ' +
              'so you can save your photos',
          },
        );
        return granted;
      } catch (err) {
        console.error('Failed to request permission ', err);
        return null;
      }
    };

    uploadFile = () => {
      const uri = decodeURIComponent(this.state.selectedFile.uri);
      const split = uri.split('/');
      const name = split.pop();
      const inbox = split.pop();
  
      const ref = firebase.storage().ref(`/random1/${name}`);
      ref
      .putFile(
        `${firebase.storage.Native.EXTERNAL_STORAGE_DIRECTORY_PATH}/${inbox}/${name}`
      )
      .then(data => {
        this.props.data.socket.emit('chat-client', {mediaLink:data.downloadURL, userId:'user1',mediaType:'file', mediaName: this.state.fileName});
        Actions.chat();
      })
      .catch(error => {console.log('error: ', error)});
    }
    
    render() {
      this.requestExternalStoragePermission();
      const list = [
        {
          name: 'item1'
        },
        {name: 'item2'}
      ];

      return(
        <View>
          <ListItem titleStyle={{ color: 'black', fontSize: 16 }} title={this.state.fileName}></ListItem>
          <View style={styles.container}>
            <TouchableOpacity onPress={this.uploadFile.bind(this)}>
              <Text style={styles.text}>
                SEND
              </Text>
          </TouchableOpacity>
          </View>
         
        </View>
      )
    }
}

const styles = StyleSheet.create ({
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
})