import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

const ListItem = (props) => {
    const { name } = props;
    return (
        <View>
            <Avatar />
            <Text>{name}</Text>
        </View>
    );
}

export default ListItem;