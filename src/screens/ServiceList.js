import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Button, Card } from 'react-native-elements'

import SERVICES_CONTAINER from 'data/service.json'
import { BLACK, BLUE } from 'utils/colors'

export default class ServiceList extends React.Component {
  static navigationOptions = {
    title: 'Liste des services',
  }

  state = {
    services: [],
  }

  componentDidMount() {
    this.setState({ services: SERVICES_CONTAINER.services })
  }

  selectService = service => {
    this.props.navigation.navigate('UserDetails', { service })
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <Text
          style={{
            margin: 10,
            textAlign: 'center',
            fontSize: 30,
            fontWeight: '600',
            color: BLACK,
          }}
        >
          Bienvenue!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '200',
            color: BLACK,
          }}
        >
          Veuillez séléctionner un service
        </Text>
        {this.state.services.length ? (
          this.state.services.map(service => {
            const title = service.title
            const {
              value: [imageUri],
            } = service.elements.find(element => element.type === 'image')
            return (
              <Card
                titleStyle={{ fontSize: 25, fontWeight: '200' }}
                containerStyle={{ borderRadius: 10 }}
                key={title}
                title={title}
                image={{ uri: imageUri }}
              >
                <Text style={{ marginBottom: 10 }}>{title}, c'est bien !</Text>
                <Button
                  buttonStyle={{
                    borderRadius: 10,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    backgroundColor: BLUE,
                  }}
                  title="Sélectionner"
                  onPress={() => {
                    this.selectService(service)
                  }}
                />
              </Card>
            )
          })
        ) : (
          <Text>Pas de services.</Text>
        )}
      </ScrollView>
    )
  }
}
