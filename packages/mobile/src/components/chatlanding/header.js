import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ChatHeader=()=>{

    return(
         <View style={style.headerContainer}>
            <View>
                  <Text style={style.leftHeaderContainer}>NorthStar</Text>
            </View>
            <View style={style.rightHeaderContainer}>

            </View>
         </View>
    );
}

export default ChatHeader;

const style=StyleSheet.create({
    headerContainer: {
     
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        backgroundColor: "#075e54",
        paddingRight: 7,
        paddingLeft:7,
        height: '15%'
     },
     leftHeaderContainer: {
        flexDirection: "row",
        color:"#fff",
        fontSize:20
     },
     rightHeaderContainer: {
        alignItems: "flex-end",
        flexDirection: "row"
     },
     mainContainer: {
       
       backgroundColor: '#F5FCFF',
       
    }
})