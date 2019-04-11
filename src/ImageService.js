import React from 'react';
import {StyleSheet, View, Image, Dimensions } from 'react-native'

export default class ImageService extends React.Component {
    render() {
        return (
        <View style={imageStyle.container}>
            <Image
            style={{
                height: 150,
                width: Dimensions.get('window').width,
                resizeMode : "cover"
            }}
            source={{ uri: this.props.img }}
            />
        
        </View>
        )
    }
}

const imageStyle = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
})
  