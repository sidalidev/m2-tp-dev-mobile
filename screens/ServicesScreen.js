import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Button } from 'react-native-elements'

class ServicesScreen extends React.Component {
  static navigationOptions = {
    title: 'Services',
  }

  render() {
    return (
      <View>
        <Text>Service Screens</Text>
        <Button
          title="User Details"
          onPress={() => {
            this.props.navigation.navigate('UserDetails')
          }}
        />
      </View>
    )
  }
}

const StackNavigator = createStackNavigator({
  Services: ServicesScreen,
})

export default StackNavigator
