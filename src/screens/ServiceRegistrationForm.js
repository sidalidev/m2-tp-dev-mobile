import React from 'react'
import { Text, View } from 'react-native'

export default class ServiceRegistrationForm extends React.Component {
  static navigationOptions = {
    title: "Formulaire d'inscription",
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
