import React from 'react'
import { View } from 'react-native'
import GenerateForm from './GenerateForm';

export default class FormService extends React.Component {
    constructor(props){
        super(props)
        this.getData = this.getData.bind(this);
        this.state={
             formValues : []
        }
    }

    getData(formValue){
        this.state.formValues.push(formValue)
        console.log(this.state.formValues)
    }

    render() {
        return (
        <View>
            {this.props.service.map((element, index) => {
             return <GenerateForm element={element} key={index} sendData={this.getData}/>
            })}
        </View>
        )
    }
}