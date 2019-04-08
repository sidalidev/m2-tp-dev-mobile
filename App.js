import React from 'react'
import { View } from 'react-native'
import BottomTabNavigator from 'navigation/BottomTabNavigator'

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          paddingTop: 30,
          paddingBottom: 10,
          paddingHorizontal: 10,
          height: '100%',
          width: '100%',
        }}
      >
        <BottomTabNavigator />
      </View>
    )
  }
}
