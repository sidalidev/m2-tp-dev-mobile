import React from 'react'
import { Text, View } from 'react-native'

export default class DeveloperList extends React.Component {
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
