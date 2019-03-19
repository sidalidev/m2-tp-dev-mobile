import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default class ServicesScreen extends React.Component {
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
            this.props.navigation.push('UserDetails')
          }}
        />
      </View>
    )
  }
}
