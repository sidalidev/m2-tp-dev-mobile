import React from 'react'
import { View, Text } from 'react-native'

export default class DevelopersScreen extends React.Component {
  static navigationOptions = {
    title: 'Développeurs',
  }

  render() {
    return (
      <View>
        <Text>Developers Screen</Text>
      </View>
    )
  }
}
