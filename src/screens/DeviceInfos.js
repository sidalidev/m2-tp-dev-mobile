import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { RED } from '../utils/colors'

export default class DeviceInfos extends Component {
  goBack = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          paddingVertical: 30,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ alignSelf: 'flex-end' }}>
          <TouchableOpacity onPress={this.goBack}>
            <FontAwesome name="close" size={32} color={RED} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
