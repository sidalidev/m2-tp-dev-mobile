import React from 'react';
import { StyleSheet, Text,TextInput, View, Switch } from 'react-native'
import {Input} from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';

export default class GenerateForm extends React.Component {
  
    constructor(props){
      super(props)
      this.state = {
        data : this.constructTabForCheckBox(),
        formValue : []
      }
    }
    
    constructTabForCheckBox(){
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
  
    onPress = data => this.setState({ data });

    renderInput() {
      const { element } = this.props
      const type = element.type
      const section = element.section
      switch (element.type) {
        case 'edit':
          return (
              //TODO :a travailler 
            <TextInput placeholder={element.value[0]} 
                onEndEditing={(text)=>{
                    let field = element.value[0] 
                    console.log(SyntheticEvent.find(text))
                    this.setState = (text) => {formValue.push(SyntheticEvent.find(text))}
                    console.log(this.state.formValue)
                }}
                value={this.state.text} style={{fontSize : 20, height: 40}}/>
          );
  
        case 'radioGroup':
          let selectedButton = this.state.data.find(e => e.selected == true);
          selectedButton = selectedButton ? selectedButton.v : this.state.data[0].label;
          return <RadioGroup radioButtons={this.state.data} onPress={this.onPress}/>
  
        case 'label':
          return <Text style={{ fontSize : 20, fontWeight : 'bold'}} >{element.value[0]} </Text>
  
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