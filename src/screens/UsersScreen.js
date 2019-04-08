import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

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
