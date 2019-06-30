import React from 'react';
import { View, Text } from 'react-native';
import ListItem from './components/ListItem';

const DataList = [
    {
        name: 'Abhishek',
        photo: '',
        message: 'Test Message'
    },
    {
        name: 'Abhishek',
        photo: '',
        message: 'Test Message'
    },
    {
        name: 'Abhishek',
        photo: '',
        message: 'Test Message'
    },
    {
        name: 'Abhishek',
        photo: '',
        message: 'Test Message'
    },
];
const ChatListing = () => {
    return (
        <View>
            {DataList.map(item=><ListItem name={item.name} />)}
        </View>
    );
}

export default ChatListing;