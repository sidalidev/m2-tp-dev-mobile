import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { BLUE } from '../utils/colors'

export default class SystemInfos extends Component {
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
        <View>
          <TouchableOpacity onPress={this.goBack}>
            <FontAwesome name="close" size={32} color={BLUE} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
