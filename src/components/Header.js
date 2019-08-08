import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 2,
        position: 'relative',
        marginTop: -10,
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 24,
        color: '#fff'
    }
};

export { Header };