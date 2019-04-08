import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class UserDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Formulaire',
  }

  render() {
    const service = this.props.navigation.getParam('service', 'NO_SERVICE')

    return (
      <View>
        <Text>{JSON.stringify(service)}</Text>
      </View>
    )
  }
}

const StackNavigator = createStackNavigator({
  UserDetails: UserDetailsScreen,
})

export default StackNavigator
