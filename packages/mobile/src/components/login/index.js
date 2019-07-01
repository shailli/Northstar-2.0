import React, { useState } from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, TextInput, Button
} from 'react-native';
export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedin] = useState(false);

    handleUserIdChange = (name) => {
        setUserName(name)
    }
    handlePasswordChange = (password) => {
        setPassword(password)
    }
    submitclick = () => {
        if ((userName == "krishankantsinghal") && (password == "krishankant123")) {
            setIsLoggedin(true);
        }
    }
    
    return (
      <View>
            <TextInput 
                placeholder="Username"
                onChangeText={this.handleUserIdChange}
                name="username"
            />
            <TextInput 
                placeholder="Password"
                onChangeText={this.handlePasswordChange}
                name="password"
            />
            {/* <input type="text" name="username" hint="username" onChange={this.handleUserIdChange} />
            <input type="password" name="password" hint="password" onChange={this.handlePasswordChange} /> */}
            {/* <button name="submit" onClick={this.submitclick}> Submit</button> */}
            <Button type="submit"
                onPress={this.submitclick}
                onKeyPress={this.submitclick}
                title='Login'
            />
        </View>
    );
};
  