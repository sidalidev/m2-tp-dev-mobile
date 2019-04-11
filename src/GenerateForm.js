import React from 'react';
import { StyleSheet, Text,TextInput, View, Switch } from 'react-native'
import {Input} from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';
import SwitchToggle from 'react-native-switch-toggle'

export default class GenerateForm extends React.Component {
  
    constructor(props){
      super(props)
      this.state = {
        data : this.constructTabForCheckBox(),
        formValue : [],
        switchOn : true
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
  
    sendData(){
        this.props.sendData(this.state.formValue[0])
    }

    onPress = data => this.setState({ data });

    onSwitchPress = () => {
      this.setState({ switchOn: !this.state.switchOn })
    }

    renderInput() {
      const { element } = this.props
      const type = element.type
      const section = element.section
      switch (element.type) {
        case 'edit':
            let value = []
          return (
            <TextInput placeholder={element.value[0]} 
                onEndEditing={(text)=>{
                    this.state.formValue.splice(0,1),
                    this.state.formValue.push(text.nativeEvent.text),
                    this.sendData()
                }}
                value={this.state.formValue[0]}
                style={{fontSize : 20, height: 40, borderBottomWidth : 1}}/>
          );
  
        case 'radioGroup':
          return <RadioGroup radioButtons={this.state.data} onPress={(this.onPress, this.setState = () => {(
            selectedButton = this.state.data.find(e => e.selected == true),
            selectedButton = selectedButton ? selectedButton.v : this.state.data[0].v,
            this.state.formValue.splice(0,1),
            this.state.formValue.push(selectedButton),
            this.sendData())})}
            
            value = {this.state.formValue[0]}/>
  
        case 'label':
          return <Text style={{ fontSize : 20, fontWeight : 'bold'}} >{element.value[0]} </Text>
  
          case 'switch':
            return (
              <SwitchToggle
                switchOn={this.state.switchOn}
                onPress={this.onSwitchPress}
              />
            )
      }
      
    }
    render() {
      return (
            <View>{this.renderInput()}</View>            
        );
    }
  }
  
  const stylesButton = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });