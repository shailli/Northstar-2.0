import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { containerStyle, titleStyle, messageStyle, textContainerStyle } from './ListItem.styles';

const ListItem = (props) => {
    const { name, message } = props.data;
    return (
        <View style={containerStyle}>
            <Avatar
                rounded
                size={48}
                title={name.charAt(0)}
            />
            <View style={textContainerStyle}>
                <Text numberOfLines={1} style={titleStyle}>{name}</Text>
                <Text numberOfLines={1} style={messageStyle}>{message}</Text>
            </View>
        </View>
    );
}

export default ListItem;