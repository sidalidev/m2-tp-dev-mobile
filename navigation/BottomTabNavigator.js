import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation'
import ServicesScreen from '../screens/ServicesScreen'
import UserDetailsScreen from '../screens/UserDetailsScreen'
import UsersScreen from '../screens/UsersScreen'
import DevelopersScreen from '../screens/DevelopersScreen'

const BottomTabNavigator = createBottomTabNavigator(
  {
    // Screens
    Services: {
      screen: ServicesScreen,
      navigationOptions: { title: 'Services' },
    },
    UserDetails: {
      screen: UserDetailsScreen,
      navigationOptions: {
        title: 'Formulaire',
      },
    },
    Users: {
      screen: UsersScreen,
      navigationOptions: {
        title: 'Résultat',
      },
    },
    Developers: {
      screen: DevelopersScreen,
      navigationOptions: {
        title: 'Développeurs',
      },
    },
  },
  {
    // Options
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: '#e74c3c',
        inactiveTintColor: '#95a5a6',
      },
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Services':
            iconName = 'ios-list'
            break
          case 'UserDetails':
            iconName = 'ios-person-add'
            break
          case 'Users':
            iconName = 'ios-albums'
            break
          case 'Developers':
            iconName = 'ios-code'
            break
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />
      },
    }),
  },
)

export default BottomTabNavigator
