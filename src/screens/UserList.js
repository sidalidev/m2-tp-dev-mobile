import React from 'react'
import { Text, View } from 'react-native'

export default class UserList extends React.Component {
  static navigationOptions = {
    title: 'Résultat',
  }
  render() {
    return (
      <View>
        <Text>Users Screen</Text>
      </View>
    )
  }
}
