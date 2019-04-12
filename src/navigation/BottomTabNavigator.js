import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
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

// Wrap Service Selection & Registration Workflow
const ServicesStackNavigator = createStackNavigator(
  {
    ServiceList: ServiceList,
    UserDetails: ServiceRegistrationForm,
  },
  { headerMode: 'none' },
)

// BottomNavigation for the 3 main screens
const BottomTabNavigator = createBottomTabNavigator(
  {
    Users: UserList,
    Services: ServicesStackNavigator,
    Developers: DeveloperList,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: BLUE,
        inactiveTintColor: GRAY,
      },
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
        case 'Services':
          iconName = 'tv'
          break
        case 'Users':
          iconName = 'users'
          break
        case 'Developers':
          iconName = 'code'
          break
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      },
    }),
  },
)

export default createAppContainer(BottomTabNavigator)
