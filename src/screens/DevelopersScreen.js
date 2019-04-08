import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

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
