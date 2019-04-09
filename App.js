import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import BottomTabNavigator from 'navigation/BottomTabNavigator'
import DeviceInfos from 'screens/DeviceInfos'
import { BLUE } from './src/utils/colors'
import { createStackNavigator, createAppContainer } from 'react-navigation'

class App extends React.Component {
  openDeviceInfos = () => {
    this.props.navigation.navigate('DeviceInfos')
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
          <TouchableOpacity onPress={this.openDeviceInfos}>
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
    { App, DeviceInfos },
    { headerMode: 'none', mode: 'modal' },
  ),
)

export default AppWithNavigation
