import React from 'react'
import { View, Text } from 'react-native'

export default class UsersScreen extends React.Component {
  static navigationOptions = {
    title: 'Utilisateurs',
  }
  render() {
    return (
      <View>
        <Text>Users Screen</Text>
      </View>
    )
  }
}
