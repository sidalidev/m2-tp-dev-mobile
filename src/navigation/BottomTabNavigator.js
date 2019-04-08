import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'

import UsersScreen from 'screens/UsersScreen'
import UserDetailsScreen from 'screens/UserDetailsScreen'
import ServicesScreen from 'screens/ServicesScreen'
import DevelopersScreen from 'screens/DevelopersScreen'

import { BLUE, GRAY } from 'utils/colors'

const ServicesStack = createStackNavigator(
  {
    ServiceList: ServicesScreen,
    UserDetails: UserDetailsScreen,
  },
  { headerMode: 'none' },
)

const UsersStack = createStackNavigator(
  {
    UserList: UsersScreen,
  },
  { headerMode: 'none' },
)

const DevelopersStack = createStackNavigator(
  {
    DeveloperList: DevelopersScreen,
  },
  { headerMode: 'none' },
)

const BottomTabNavigator = createBottomTabNavigator(
  {
    Services: ServicesStack,
    Users: UsersStack,
    Developers: DevelopersStack,
  },
  {
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
          // case 'UserDetails':
          //   iconName = 'ios-person-add'
          //   break
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

export default createAppContainer(BottomTabNavigator)
