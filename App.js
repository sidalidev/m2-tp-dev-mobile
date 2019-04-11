import React from 'react'
import {StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import {Button, Input} from 'react-native-elements'
import serviceProvider from './assets/service.json'
import ImageService from './src/ImageService';
import FormService from './src/FormService';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.service = serviceProvider.services.map(function(item) {
      return {
        title: item.title,
        imageUrl: item.elements[0].value[0],
      }
    })
    this.serviceContent = serviceProvider.services[0].elements.map(function(
      field,
    ) {
      return {
        section: field.section,
        type: field.type,
        value: field.value,
        mandatory: field.mandatory,
      }
    })
  }

  state = {
    name: '',
    checked: false,
  }

  handler(){
    this.setState({
      formValue: []
    })
  }

  getItem = event => {
    this.setState({
      name: event,
    })
  }

  validate(){

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageService
            text={this.service[0].title}
            img={this.service[0].imageUrl}
          />
          <FormService service={this.serviceContent} />
        </ScrollView>
        <Button style={{ position : "absolute", width : Dimensions.get('window').width}} title="Valider"
          onPress={this.validate()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    position : "relative",
  }
})