import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { GREEN } from 'utils/colors.js'
import SERVICES_CONTAINER from 'data/service.json'
import { BLACK, NAVY } from '../utils/colors'

class ServicesScreen extends React.Component {
  static navigationOptions = {
    title: 'Services',
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
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <Text
          style={{
            margin: 20,
            textAlign: 'center',
            fontSize: 30,
            fontWeight: '200',
            color: NAVY,
          }}
        >
          Bienvenue, veuillez choisir un service
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
                <Text style={{ marginBottom: 10 }}>
                  The idea with React Native Elements is more about component
                  structure than actual design.
                </Text>
                <Button
                  buttonStyle={{
                    borderRadius: 10,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    backgroundColor: GREEN,
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

export default ServicesScreen
