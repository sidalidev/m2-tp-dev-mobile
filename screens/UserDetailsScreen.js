import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

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
