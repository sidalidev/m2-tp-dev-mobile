import React from 'react'
import { View, Text } from 'react-native'

export default class UserDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Formulaire',
  }
  render() {
    return (
      <View>
        <Text>UserDetails Screen</Text>
      </View>
    )
  }
}
