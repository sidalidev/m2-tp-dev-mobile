import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import { BLACK, RED } from 'utils/colors'
import SYSTEM_INFOS from 'utils/system-infos'
import DeviceInfo from 'components/DeviceInfo'

export default class DeviceInfos extends Component {
  goBack = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <View
          style={{
            alignSelf: 'flex-end',
            paddingTop: 20,
            paddingRight: 20,
          }}
        >
          <TouchableOpacity onPress={this.goBack}>
            <Icon name="close" size={40} color={RED} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 26,
            fontWeight: '500',
            color: BLACK,
          }}
        >
          Informations Système
        </Text>
        <ScrollView
          contentContainerStyle={{
            padding: 30,
          }}
        >
          {SYSTEM_INFOS.map(({ value, label }) => (
            <DeviceInfo key={label} value={value} label={label} />
          ))}
        </ScrollView>
      </View>
    )
  }
}
