import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
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
      <View style={{ height: '100%', width: '100%' }}>
        <View
          style={{
            alignSelf: 'flex-end',
            padding: 20,
          }}
        >
          <TouchableOpacity onPress={this.openDeviceInfos}>
            <Icon name="question" size={32} color={BLUE} />
          </TouchableOpacity>
        </View>
        <BottomTabNavigator />
      </View>
    )
  }
}

const AppWithNavigation = createAppContainer(
  createStackNavigator(
    { DeviceInfos, App },
    { headerMode: 'none', mode: 'modal' },
  ),
)

export default AppWithNavigation
