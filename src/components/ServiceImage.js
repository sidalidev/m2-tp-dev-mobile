import React from 'react'
import { View, Image, Dimensions } from 'react-native'

export default class ServiceImage extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}
      >
        <Image
          style={{
            height: 150,
            width: Dimensions.get('window').width,
            resizeMode: 'cover',
          }}
          source={{ uri: this.props.uri }}
        />
      </View>
    )
  }
}
