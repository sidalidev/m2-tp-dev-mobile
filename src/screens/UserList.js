import React from 'react'
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { ScrollView } from 'react-native-gesture-handler'
import styles from 'utils/styles'
import { BLACK, SILVER } from 'utils/colors'
import SERVICES_CONTAINER from 'data/service.json'

export default class UserList extends React.Component {
  static navigationOptions = {
    title: 'Inscrits',
  }

  state = {
    isLoadingUsers: false,
    servicesUsers: [],
  }

  async componentDidMount() {
    this.setState({
      isLoadingUsers: true,
      servicesUsers: [],
    })
    try {
      let servicesUsers = await AsyncStorage.getItem('ServiceUsers')
      servicesUsers = JSON.parse(servicesUsers)
      this.setState({
        servicesUsers,
      })
      this.props.navigation.navigate('Users')
    } catch (error) {
      ToastAndroid.show(
        'Nous n\'avons pas pu récupérer les utilsateurs inscrits !',
        ToastAndroid.SHORT,
      )
    } finally {
      this.setState({
        isLoadingUsers: false,
      })
    }
  }

  renderRegistrationElement(element) {
    switch (element.type) {
    case 'radioGroup':
      return (
        <View style={{ marginTop: 5 }}>
          <Text
            style={{
              fontWeight: '400',
              textTransform: 'uppercase',
              fontSize: 10,
            }}
          >
            {element.section}
          </Text>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <Text
              style={{
                fontWeight: '500',
                textTransform: 'uppercase',
                color: element.formValue ? BLACK : SILVER,
              }}
            >
              {element.formValue ? element.formValue : 'Non renseigné'}
            </Text>
          </View>
        </View>
      )
    case 'edit':
      return (
        <View style={{ marginTop: 5 }}>
          <Text
            style={{
              fontWeight: '400',
              textTransform: 'uppercase',
              fontSize: 10,
            }}
          >
            {element.value}
          </Text>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <Text
              style={{
                fontWeight: '500',
                textTransform: 'uppercase',
                color: element.formValue ? BLACK : SILVER,
              }}
            >
              {element.formValue ? element.formValue : 'Non renseigné'}
            </Text>
          </View>
        </View>
      )

    case 'switch':
      return (
        <View style={{ marginTop: 5 }}>
          <Text
            style={{
              fontWeight: '400',
              textTransform: 'uppercase',
              fontSize: 10,
            }}
          >
            {element.section}
          </Text>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <Text
              style={{
                fontWeight: '500',
                textTransform: 'uppercase',
                color: element.formValue ? BLACK : SILVER,
              }}
            >
              {element.formValue ? 'Inscrit' : 'Non inscrit'}
            </Text>
          </View>
        </View>
      )
    default:
      return null
    }
  }

  render() {
    const { isLoadingUsers, servicesUsers } = this.state
    return (
      <ScrollView style={styles.listContainer}>
        <Text style={styles.screenTitle}>Inscrits</Text>
        {isLoadingUsers ? <ActivityIndicator /> : null}
        <View style={{ marginTop: 20 }}>
          {SERVICES_CONTAINER.services.length ? (
            SERVICES_CONTAINER.services.map(({ title, elements }) => {
              const {
                value: [imageUri],
              } = elements.find((element) => element.type === 'image')
              const serviceRegistrations = servicesUsers.filter(
                (s) => s.serviceTitle == title,
              )
              return (
                <View key={title}>
                  <View
                    style={{
                      flexDirection: 'row',
                      elevation: 1,
                      margin: 3,
                      borderRadius: 10,
                      padding: 5,
                    }}
                  >
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 10,
                      }}
                      source={{ uri: imageUri }}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '400',
                        alignSelf: 'center',
                        marginLeft: 10,
                        color: BLACK,
                      }}
                    >
                      {title}
                    </Text>
                  </View>
                  {serviceRegistrations.length ? (
                    serviceRegistrations.map((registration, index) => {
                      return (
                        <View
                          key={index}
                          style={{
                            padding: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: SILVER,
                            paddingHorizontal: 40,
                          }}
                        >
                          {registration.formElements.map((element, index) => (
                            <View key={index}>
                              {this.renderRegistrationElement(element)}
                            </View>
                          ))}
                        </View>
                      )
                    })
                  ) : (
                    <Text>
                      Pas d{'\''}inscriptions dans {title}.
                    </Text>
                  )}
                </View>
              )
            })
          ) : (
            <Text>Pas de services.</Text>
          )}
        </View>
      </ScrollView>
    )
  }
}
