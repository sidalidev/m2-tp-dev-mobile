import React from 'react'
import { createAppContainer } from 'react-navigation'
import BottomTabNavigator from './navigation/BottomTabNavigator'

const AppContainer = createAppContainer(BottomTabNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
