import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'

class UserDetailsScreen extends React.Component {
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

const StackNavigator = createStackNavigator({
  UserDetails: UserDetailsScreen,
})

export default StackNavigator
