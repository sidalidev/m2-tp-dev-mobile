import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import RNDeviceInfo from 'react-native-device-info'
import { RED, BLACK } from 'utils/colors'
import { ScrollView } from 'react-native-gesture-handler'

const SYSTEM_INFO = [
  { label: 'TotalMemory', value: RNDeviceInfo.getTotalMemory() / 1024 },
  { label: 'MaxMemory', value: RNDeviceInfo.getMaxMemory() / 1024 },
  { label: 'APILevel', value: RNDeviceInfo.getAPILevel() },
  { label: 'ApplicationName', value: RNDeviceInfo.getApplicationName() },
  { label: 'Brand', value: RNDeviceInfo.getBrand() },
  { label: 'BuildNumber', value: RNDeviceInfo.getBuildNumber() },
  { label: 'BundleId', value: RNDeviceInfo.getBundleId() },
  { label: 'Carrier', value: RNDeviceInfo.getCarrier() },
  { label: 'DeviceCountry', value: RNDeviceInfo.getDeviceCountry() },
  { label: 'DeviceId', value: RNDeviceInfo.getDeviceId() },
  { label: 'DeviceLocale', value: RNDeviceInfo.getDeviceLocale() },
  { label: 'DeviceName', value: RNDeviceInfo.getDeviceName() },
  {
    label: 'FirstInstallTime',
    value: new Date(RNDeviceInfo.getFirstInstallTime()).toLocaleDateString(),
  },
  { label: 'FontScale', value: RNDeviceInfo.getFontScale() },
  { label: 'FreeDiskStorage', value: RNDeviceInfo.getFreeDiskStorage() },
  { label: 'InstanceID', value: RNDeviceInfo.getInstanceID() },
  {
    label: 'LastUpdateTime',
    value: new Date(RNDeviceInfo.getLastUpdateTime()).toLocaleDateString(),
  },
  { label: 'Manufacturer', value: RNDeviceInfo.getManufacturer() },
  { label: 'Model', value: RNDeviceInfo.getModel() },
  { label: 'PhoneNumber', value: RNDeviceInfo.getPhoneNumber() },
  { label: 'ReadableVersion', value: RNDeviceInfo.getReadableVersion() },
  { label: 'SerialNumber', value: RNDeviceInfo.getSerialNumber() },
  { label: 'SystemName', value: RNDeviceInfo.getSystemName() },
  { label: 'SystemVersion', value: RNDeviceInfo.getSystemVersion() },
  { label: 'Timezone', value: RNDeviceInfo.getTimezone() },
  { label: 'TotalDiskCapacity', value: RNDeviceInfo.getTotalDiskCapacity() },
  { label: 'UniqueID', value: RNDeviceInfo.getUniqueID() },
  { label: 'UserAgent', value: RNDeviceInfo.getUserAgent() },
  { label: 'Version', value: RNDeviceInfo.getVersion() },
  { label: 'DeviceType', value: RNDeviceInfo.getDeviceType() },
]
// debugger

export default class DeviceInfos extends Component {
  goBack = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <View
          style={{ alignSelf: 'flex-end', alignSelf: 'flex-end', padding: 20 }}
        >
          <TouchableOpacity onPress={this.goBack}>
            <Icon name="close" size={32} color={RED} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            color: BLACK,
            fontSize: 25,
            textAlign: 'center',
          }}
        >
          Informations Système
        </Text>
        <ScrollView
          contentContainerStyle={{
            padding: 20,
          }}
        >
          {SYSTEM_INFO.map(info => (
            <View
              style={{
                flexDirection: 'row',
                padding: 5,
                alignItems: 'center',
              }}
              key={info.label}
            >
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 18,
                  textAlignVertical: 'center',
                }}
              >
                {info.label}
                {': '}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  textAlignVertical: 'center',
                }}
              >
                {info.value}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}
