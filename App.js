import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import BottomTabNavigator from 'navigation/BottomTabNavigator'
import SystemInfos from 'screens/SystemInfos'
import { BLUE } from './src/utils/colors'
import { createStackNavigator, createAppContainer } from 'react-navigation'

class App extends React.Component {
  openSystemInfos = () => {
    this.props.navigation.navigate('SystemInfos')
  }
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
        <View
          style={{
            alignSelf: 'flex-end',
          }}
        >
          <TouchableOpacity onPress={this.openSystemInfos}>
            <FontAwesome name="question" size={32} color={BLUE} />
          </TouchableOpacity>
        </View>
        <BottomTabNavigator />
      </View>
    )
  }
}

const AppWithNavigation = createAppContainer(
  createStackNavigator(
    { App, SystemInfos },
    { headerMode: 'none', mode: 'modal' },
  ),
)

export default AppWithNavigation
