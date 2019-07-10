import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

const ChatHeader = props => {
  return (
    <View style={style.headerContainer}>
      <View>
        <Text style={style.leftHeaderContainer}>NorthStar</Text>
      </View>
      <View style={style.rightHeaderContainer}>
        <TouchableHighlight
          style={{ height: '100%', width: 40, marginRight: 7 }}
          onPress={() => selectFile(props.socket)}
          underlayColor="transparent"
        >
          <Icon style={style.button} raised name="file" size={20} type="feather" color="#075e54" />
        </TouchableHighlight>
        <TouchableHighlight
          style={{ height: '100%', width: 40, marginRight: 7 }}
          onPress={() => Actions.camera({ socket: props.socket })}
          underlayColor="transparent"
        >
          <Icon style={style.button} raised name="camera" size={20} type="feather" color="#075e54" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ChatHeader;

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#075e54',
    paddingRight: 7,
    paddingLeft: 7,
    height: '15%',
  },
  leftHeaderContainer: {
    flexDirection: 'row',
    color: '#fff',
    fontSize: 20,
  },
  rightHeaderContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  mainContainer: { backgroundColor: '#F5FCFF' },
  button: {
    height: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    zIndex: 2,
  },
});

const selectFile = socket => {
  DocumentPicker.show({ filetype: [DocumentPickerUtil.allFiles()] }, (error, res) => {
    if (res) {
      let data = {
        socket: socket,
        fileRes: res,
      };
      Actions.files({ data: data });
    }
  });
};
