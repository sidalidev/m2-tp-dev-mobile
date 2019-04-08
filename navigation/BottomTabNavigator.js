import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import { BLUE, GRAY } from '../assets/colors'
import DevelopersScreen from '../screens/DevelopersScreen'
import ServicesScreen from '../screens/ServicesScreen'
import UserDetailsScreen from '../screens/UserDetailsScreen'
import UsersScreen from '../screens/UsersScreen'

const BottomTabNavigator = createBottomTabNavigator(
  {
    // Screens
    Services: {
      screen: ServicesScreen,
      navigationOptions: {
        title: 'Services',
      },
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
    animationEnabled: true,
    // Options
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: BLUE,
        inactiveTintColor: GRAY,
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
