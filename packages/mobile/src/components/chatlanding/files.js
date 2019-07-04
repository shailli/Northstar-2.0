import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, FlatList, AsyncStorage }  from 'react-native';
import { ListItem } from 'react-native-elements';
var RNFS = require('react-native-fs');
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import firebase from 'react-native-firebase'

export default class FileSystem extends Component {
  // state = {
  //   fileName: ''
  // }
    // componentDidMount() {
    //     console.log("CachesDirectoryPath: ", RNFS.CachesDirectoryPath);
    //     console.log("MainBundlePath: ", RNFS.MainBundlePath);
    //     console.log("ExternalCachesDirectoryPath: ", RNFS.ExternalCachesDirectoryPath);
    //     console.log("DocumentDirectoryPath: ", RNFS.DocumentDirectoryPath);//
    //     console.log("TemporaryDirectoryPath: ", RNFS.TemporaryDirectoryPath);// TemporaryDirectoryPath and CachesDirectoryPath are same. Inside Android directory
    //     console.log("ExternalDirectoryPath: ", RNFS.ExternalDirectoryPath);
    //     console.log("LibraryDirectoryPath: ", RNFS.LibraryDirectoryPath);
    //     console.log("ExternalStorageDirectoryPath: ", RNFS.ExternalStorageDirectoryPath);// Use ExternalStorageDirectoryPath to store files in download directory

    //     var path = RNFS.ExternalStorageDirectoryPath + '/Download/test-pdf.pdf';
    //     var DownloadFileOptions = {
    //         fromUrl: 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
    //         toFile: path,
    //         // headers?: false,       // An object of headers to be passed to the server
    //         // background?: false,    // Continue the download in the background after the app terminates (iOS only)
    //         // discretionary?: boolean, // Allow the OS to control the timing and speed of the download to improve perceived performance  (iOS only)
    //         // cacheable?: boolean,     // Whether the download can be stored in the shared NSURLCache (iOS only, defaults to true)
    //         // progressDivider?: 10,
    //         begin: DownloadBeginCallbackResult,
    //         progress: DownloadProgressCallbackResult,
    //         // resumable?: () => void;    // only supported on iOS yet
    //         connectionTimeout: 300, // only supported on Android yet
    //         readTimeout: 300       // supported on Android and iOS
            
    //     }

    //     var DownloadBeginCallbackResult = (res) => {
    //         var jobId = res.jobId
    //         console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
    //     }
    //     var DownloadProgressCallbackResult = (res) => {
    //         var percentage = Math.floor((response.totalBytesSent/response.totalBytesExpectedToSend) * 100);
    //         console.log('UPLOAD IS ' + percentage + '% DONE!');
    //     }
        
    //     // RNFS.downloadFile(DownloadFileOptions).promise.then(response => {
    //     //     console.log("response in download file: ", response)
    //     // })
    //     // .catch(err => {
    //     //     console.log(err);
    //     // })
        
    //     // RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
    //     // .then((success) => {
    //     //   console.log('FILE WRITTEN!', success);
    //     // })
    //     // .catch((err) => {
    //     //   console.log(err.message);
    //     // });

    //     // RNFS.unlink(path)
    //     // .then(() => {
    //     //     console.log('FILE DELETED');
    //     // })
    //     // // `unlink` will throw an error, if the item to unlink does not exist
    //     // .catch((err) => {
    //     //     console.log(err.message);
    //     // });

        
    //     RNFS.readDir(`${RNFS.ExternalStorageDirectoryPath}/Download`) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    //     .then((result) => {
    //         console.log('GOT RESULT', result);

    //         // stat the first file
    //         return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    //     })
    //     .then((statResult) => {
    //       console.log(statResult);
    //         if (statResult[0].isFile()) {
    //             // if we have a file, read it
    //             return RNFS.readFileRes(statResult[1], 'utf8');
    //         }

    //         return 'no file';
    //     })
    //     .then((contents) => {
    //         // log the file contents

    //         console.log(contents);
    //     })
    //     .catch((err) => {
    //         console.log(err.message, err.code);
    //     });


        
    // }

    componentDidMount() {
      AsyncStorage.getItem('fcmToken').then(token => {console.log('fcmToken: ', token)});
      
      // console.log(DocumentPickerUtil);
      DocumentPicker.show({
        filetype: [DocumentPickerUtil.allFiles()],
      },(error,res) => {
        // Android
        console.log(res);
        // this.state.fileName = rea.fileName;
        const uri = decodeURIComponent(res.uri);
        console.log(decodeURIComponent(res.uri));
        const split = uri.split('/');
        const name = split.pop();
        const inbox = split.pop();
        // console.log(decodeURI(name))
        // console.log(decodeURI(inbox))
        console.log(name, inbox)
        const ref = firebase.storage().ref(`/random1/${name}`);
        console.log(ref);
        // ref.delete()
        //   .then(() => {
        //       // deleted
        //       console.log('deleted')
        //   })
        //   .catch((deleteError) => {
        //       console.log(deleteError)
        //   });
        ref
        .putFile(
          `${firebase.storage.Native.EXTERNAL_STORAGE_DIRECTORY_PATH}/${inbox}/${name}`
        )
        .then(data => {console.log('success: ', data)})
        .catch(error => {console.log('error: ', error)});

      });
    }


    // renderItem = ({ item }) => (
    //   <ListItem
    //     title={item.name}
    //   />
    // )
    // keyExtractor = (item, index) => index.toString()
    
    render() {
      const list = [
        {
          name: 'item1'
        },
        {name: 'item2'}
      ];

      return(
          <View>
            <ListItem></ListItem>
          </View>
        //   <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        //     <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
        //       <Text style={{ fontSize: 14 }}> SEND </Text>
        //   </TouchableOpacity>
        //  </View>
      )
    }
}
