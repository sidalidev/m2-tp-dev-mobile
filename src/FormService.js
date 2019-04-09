import React from 'react'
import { View } from 'react-native'
import GenerateForm from './GenerateForm';

export default class FormService extends React.Component {
    constructor(props){
        super(props)
    }

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