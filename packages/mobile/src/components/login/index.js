import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import loginStyles from './loginStyles';
export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedin] = useState(false);

    handleUserIdChange = name => {
        setUserName(name);
    };
    handlePasswordChange = password => {
        setPassword(password);
    };
    submitclick = () => {
        if (userName == 'krishankantsinghal' && password == 'krishankant123') {
            setIsLoggedin(true);
        }
        checkAuth = () => {
            fetchProfiles().then(data => {
                let results = data.results;
                this.setState({ profiles: results });
            });
        };
    };

    return (
        <View style={loginStyles.loginContainer}>
            <TextInput
                placeholder="Username"
                onChangeText={this.handleUserIdChange}
                name="username"
                style={loginStyles.inputText}
            />
            <TextInput
                placeholder="Password"
                onChangeText={this.handlePasswordChange}
                name="password"
                style={loginStyles.inputText}
            />
            {/* <input type="text" name="username" hint="username" onChange={this.handleUserIdChange} />
            <input type="password" name="password" hint="password" onChange={this.handlePasswordChange} /> */}
            {/* <button name="submit" onClick={this.submitclick}> Submit</button> */}
            <TouchableOpacity style={loginStyles.buttonStyle}>
                <Button
                    type="submit"
                    onSubmitEditing={this.checkAuth}
                    onPress={this.submitclick}
                    onKeyPress={this.submitclick}
                    title="LOGIN"
                    color="#fff"
                />
            </TouchableOpacity>
        </View>
    );
}
