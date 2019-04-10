import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'
import BottomTabNavigator from 'navigation/BottomTabNavigator'
import DeviceInfos from 'screens/DeviceInfos'
import { WHITE, BLUE } from 'utils/colors'
import styles from 'utils/styles'

class App extends React.Component {
  openDeviceInfos = () => {
    this.props.navigation.navigate('DeviceInfos')
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.topRightAbsolute,
            {
              backgroundColor: BLUE,
              paddingVertical: 10,
              borderRadius: 30,
              width: 60,
              elevation: 1,
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
        >
          <TouchableOpacity onPress={this.openDeviceInfos}>
            <Icon name="question" size={38} color={WHITE} />
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
