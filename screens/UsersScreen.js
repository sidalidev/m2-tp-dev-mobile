import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'

class UsersScreen extends React.Component {
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

const StackNavigator = createStackNavigator({
  Users: UsersScreen,
})

export default StackNavigator
