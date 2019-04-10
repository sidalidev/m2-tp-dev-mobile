import React from 'react'
import { Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from 'utils/styles'
import { BLACK, SILVER } from 'utils/colors'
import SERVICES_CONTAINER from 'data/service.json'

export default class UserList extends React.Component {
  static navigationOptions = {
    title: 'Inscrits',
  }

  render() {
    return (
      <ScrollView style={styles.listContainer}>
        <Text style={styles.screenTitle}>Inscrits</Text>
        <View style={{ marginTop: 20 }}>
          {SERVICES_CONTAINER.services.map(({ title, elements }) => {
            const {
              value: [imageUri],
            } = elements.find(element => element.type === 'image')
            return (
              <View key={title} style={{ marginVertical: 20 }}>
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
                <View style={{ paddingHorizontal: 40 }}>
                  <View
                    style={{
                      padding: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: SILVER,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontWeight: '400',
                          textTransform: 'uppercase',
                          fontSize: 10,
                        }}
                      >
                        Identité
                      </Text>
                      <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <Text
                          style={{
                            fontWeight: '500',
                            textTransform: 'uppercase',
                            color: BLACK,
                          }}
                        >
                          Nom
                        </Text>
                        <Text style={{ marginLeft: 10, color: BLACK }}>
                          Hello
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontWeight: '400',
                          textTransform: 'uppercase',
                          fontSize: 10,
                          marginTop: 5,
                        }}
                      >
                        Genre
                      </Text>
                      <View
                        style={{
                          marginLeft: 5,
                        }}
                      >
                        <Text
                          style={{
                            color: BLACK,
                          }}
                        >
                          Musique
                        </Text>
                        <Text
                          style={{
                            color: BLACK,
                          }}
                        >
                          Horreur
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}
