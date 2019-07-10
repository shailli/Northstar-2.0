import React from 'react';
import { ScrollView } from 'react-native';
import ListItem from './components/ListItem';

const DataList = [
    {
        name: 'Abhishek',
        photo: '',
        message: 'Test Message'
    },
    {
        name: 'Sergio Ramos',
        photo: '',
        message: 'Test Message Test MessageTest MessageTest Message'
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
    }
];
const ChatListing = () => {
    return (
        <ScrollView>
            {DataList.map((item, index) => (
                <ListItem key={index} data={item} />
            ))}
        </ScrollView>
    );
};

export default ChatListing;
