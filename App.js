import React from 'react'
import { StyleSheet, Text, View, Image, Switch, ScrollView,Dimensions } from 'react-native'
import {
  FormLabel,
  Input,
  FormValidationMessage,
  Button,
  ThemeProvider,
  Radio,
  CheckBox,
} from 'react-native-elements'
import serviceProvider from './assets/service.json'
import RadioGroup from 'react-native-radio-buttons-group';

export default class App extends React.Component {
  constructor(props) {
    super(props)

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

  getItem = event => {
    this.setState({
      name: event,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageService
            text={this.service[0].title}
            img={this.service[0].imageUrl}
          />

          <Input
            onChangeText={this.getItem}
            value={this.state.name}
            placeholder="Just an example"
          />
          <FormService service={this.serviceContent} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class ImageService extends React.Component {
  render() {
    return (
      <View style={imageStyle.container}>
        <Image
          style={{
            height: 150,
            width: Dimensions.get('window').width,
            resizeMode : "cover"
          }}
          source={{ uri: this.props.img }}
        />
      
      </View>
    )
  }
}

const imageStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
})

class FormService extends React.Component {
  render() {
    return (
      <View>
        {this.props.service.map((element, index) => {
          return <GenerateForm element={element} key={index} />
        })}
      </View>
    )
  }
}

class GenerateForm extends React.Component {
  state = {
    checkedValues: [],
    checked : false,
    data : this.constructTab()
  }

  constructTab(){
    const { element } = this.props
    let tab = []
    let label =""
    let v = ""
    element.value.map(value => (
      label= value,
      v = value,
      tab.push({v, label})
   ));
   return tab;
  }

  getValues(value, type, section){
    let values = {value, type, section}
    return values;
  }

  onPress = data => this.setState({ data });

  renderInput() {
    const { element } = this.props
    const type = this.props.element.type
    const section = this.props.element.section
    switch (element.type) {
      case 'edit':
        return <Input placeholder={element.value[0]} />

      case 'radioGroup':
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.v : this.state.data[0].label;
        return (
            <View style={styles.container}>
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress}/>
            </View>
        );

      case 'label':
        return <Input placeholder={element.value[0]} />

      case 'switch':
        return <Text>Eh j'parle pas de la console hein..</Text>
    }
  }
  render() {
    return <View>{this.renderInput()}</View>
  }
}

const stylesButton = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});