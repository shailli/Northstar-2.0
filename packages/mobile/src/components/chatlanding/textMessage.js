import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const TextMessage = (props) => {
    const userId="user1";
    return (

            <View style={[styles.conent,checkUser(props.data)]}>
                <Text style={styles.name}>{props.data.userId}:</Text>
                <Text style={styles.message}>{props.data.message}</Text>
            </View>
    );
    function checkUser(data){
        if(data.userId==userId)
        return styles.ownText;
        else 
        return styles.otherText;
    }
}



export default TextMessage;

const styles = StyleSheet.create({
    conent: { 
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 10, 
        marginLeft: 5,
        marginRight:5,
        flexDirection:'row',
    },
    name:{
        fontSize: 20,
        marginRight:5,
        fontWeight:"700"
    },
    message:{
        fontSize: 20,
    },
    ownText: {
        backgroundColor: "#E0FFFF", 
        alignSelf: 'flex-end'
   },
   otherText:{
       backgroundColor: "#fff", 
       alignSelf: 'flex-start'
   }
})