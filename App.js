import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import ServicesScreen from './screens/ServicesScreen'
import UserDetailsScreen from './screens/UserDetailsScreen'
import UsersScreen from './screens/UsersScreen'
import DevelopersScreen from './screens/DevelopersScreen'

const AppNavigator = createStackNavigator(
  {
    // Screens
    Services: {
      screen: ServicesScreen,
    },
    UserDetails: {
      screen: UserDetailsScreen,
    },
    Users: {
      screen: UsersScreen,
    },
    Developers: {
      screen: DevelopersScreen,
    },
  },
  {
    // Options
    initialRouteName: 'Services',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2ab7ca',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
