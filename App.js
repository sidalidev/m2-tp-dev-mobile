import React from 'react'
import { StyleSheet, Text, View, Image, Switch, ScrollView } from 'react-native'
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
            marginTop: 50,
            height: 100,
            width: 100,
          }}
          source={{ uri: this.props.img }}
        />
        <Text>{this.props.text}</Text>
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

<<<<<<< Updated upstream
  renderInput() {
    const { element } = this.props

=======
  getValues(value, type, section){
    let values = {value, type, section}
    return values;
  }

  onPress = data => this.setState({ data });

  renderInput() {
    const { element } = this.props
    const type = this.props.element.type
    const section = this.props.element.section
>>>>>>> Stashed changes
    switch (element.type) {
      case 'edit':
        return <Input placeholder={element.value[0]} />

      case 'radioGroup':
<<<<<<< Updated upstream
        return element.value.map(value => (
          <CheckBox
            key={value}
            title={value}
            checked={this.state.checkedValues.includes(value)}
            onPress={() => {
              let { checkedValues } = this.state.checkedValues
              if (checkedValues.includes(value)) {
                checkedValues.splice(checkedValues.indexOf(value), 1)
              } else {
                checkedValues = []
                checkedValues.push(value)
              }
              this.setState({ checkedValues })
            }}
          />
        ))
=======
        console.log(this.state.data)
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.v : this.state.data[0].label;
        return (
            <View style={styles.container}>
               <Text style={styles.valueText}>
                    Value = {selectedButton}
                </Text>
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress}/>
            </View>
        );


          // <CheckBox
          //   key={value}
          //   title={value}
          //   checked= {this.state.checkedValues.includes(this.getValues(value, type, section))}
          //   onPress={() => {
          //     let checkedValue  = this.state.checkedValues
          //     let values = this.getValues(value, type, section)
          //     if (checkedValue.includes(values)) {
          //       checkedValue.splice(checkedValue.indexOf(values), 1)
          //     } else {
          //       checkedValue = []
          //       checkedValue.push(values)
          //     }
          //     console.log(checkedValue)
          //     this.setState(() => ({ checkedValues: checkedValue }));
          //     console.log(this.state.checkedValues)
          //   }}
          // />
        
>>>>>>> Stashed changes

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