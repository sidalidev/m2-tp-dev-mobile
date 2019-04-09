import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import BottomTabNavigator from 'navigation/BottomTabNavigator'
import DeviceInfos from 'screens/DeviceInfos'
import { BLUE, WHITE } from 'utils/colors'

class App extends React.Component {
  openDeviceInfos = () => {
    this.props.navigation.navigate('DeviceInfos')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 9999,
            backgroundColor: WHITE,
            padding: 10,
            borderRadius: 50,
            width: 50,
            elevation: 1,
            marginRight: 10,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity onPress={this.openDeviceInfos}>
            <Icon name="question" size={40} color={BLUE} />
          </TouchableOpacity>
        </View>
        <BottomTabNavigator />
      </View>
    )
  }
}

const AppWithNavigation = createAppContainer(
  createStackNavigator(
    {
      App: {
        screen: App,
      },
      DeviceInfos: {
        screen: DeviceInfos,
      },
    },
    { headerMode: 'none', mode: 'modal' },
  ),
)

export default AppWithNavigation
