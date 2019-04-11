import React from 'react'
import { View, Text } from 'react-native'
import { BLACK, RED } from 'utils/colors'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default ({ value, label }) => (
  <View
    style={{
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
    }}
    key={label}
  >
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: 16,
        textAlignVertical: 'center',
        color: BLACK,
        width: '30%',
      }}
    >
      {label}
    </Text>
    <Text
      style={{
        marginLeft: 20,
        fontWeight: '400',
        fontSize: 14,
        textAlignVertical: 'center',
        width: '70%',
        color: BLACK,
      }}
    >
      {value ? value : <Icon name="times" size={22} color={RED} />}
    </Text>
  </View>
)
