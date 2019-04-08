import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'

import ServiceList from 'screens/ServiceList'
import ServiceRegistrationForm from 'screens/ServiceRegistrationForm'
import UserList from 'screens/UserList'
import DeveloperList from 'screens/DeveloperList'

import { BLUE, GRAY } from 'utils/colors'

const ServicesStackNavigator = createStackNavigator(
  {
    ServiceList: ServiceList,
    UserDetails: ServiceRegistrationForm,
  },
  { headerMode: 'none' },
)

const BottomTabNavigator = createBottomTabNavigator(
  {
    Services: ServicesStackNavigator,
    Users: UserList,
    Developers: DeveloperList,
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
