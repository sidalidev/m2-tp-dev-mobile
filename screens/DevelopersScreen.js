import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'

class DevelopersScreen extends React.Component {
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

const StackNavigator = createStackNavigator({
  Developers: DevelopersScreen,
})

export default StackNavigator
