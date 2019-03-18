import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native'

class ServicesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Services Screen</Text>
      </View>
    )
  }
}
class UserDetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>UserDetails Screen</Text>
      </View>
    )
  }
}
class UsersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Users Screen</Text>
      </View>
    )
  }
}
class DevelopersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Developers Screen</Text>
      </View>
    )
  }
}

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
  },
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
