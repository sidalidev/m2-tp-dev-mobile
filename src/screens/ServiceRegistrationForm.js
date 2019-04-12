import React from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import SwitchToggle from 'react-native-switch-toggle'
import RadioGroup from 'react-native-radio-buttons-group'
import { Button, CheckBox } from 'react-native-elements'

import ServiceImage from 'components/ServiceImage'

import { SILVER, GREEN } from 'utils/colors'
import styles from 'utils/styles'

export default class ServiceRegistrationForm extends React.Component {
  static navigationOptions = {
    title: 'Formulaire d\'inscription',
  }

  state = {
    service: this.props.navigation.getParam('service', 'NO_SERVICE'),
    formElements: [],
    isSubmitting: false,
  }

  componentDidMount() {
    const formElements = this.state.service.elements
      .filter((e) => e.type !== 'image')
      .map((e) => {
        return {
          ...e,
          formValue: null,
        }
      })
    this.setState({ formElements })
  }

  updateFieldValue = (formValueIndex, value) => {
    let updatedFormElements = this.state.formElements
    updatedFormElements[formValueIndex] = {
      ...updatedFormElements[formValueIndex],
      formValue: value,
    }
    this.setState({ formElements: updatedFormElements }, () => {
      // console.log('✒️ edit', this.state.formElements)
    })
  }

  hasFormErrors() {
    let error = false
    this.state.formElements.forEach((element) => {
      if (
        element.mandatory == 'true' &&
        !element.formValue &&
        element.type != 'label'
      ) {
        error = true
      }
    })
    return error
  }

  saveUser = async () => {
    const { service, formElements } = this.state
    this.setState({
      isSubmitting: true,
    })
    try {
      let servicesUsers = await AsyncStorage.getItem('ServiceUsers')
      servicesUsers = JSON.parse(servicesUsers)
      if (servicesUsers && servicesUsers.length) {
        await AsyncStorage.setItem(
          'ServiceUsers',
          JSON.stringify([
            ...servicesUsers,
            {
              serviceTitle: service.title,
              formElements,
            },
          ]),
        )
      } else {
        await AsyncStorage.setItem(
          'ServiceUsers',
          JSON.stringify([
            {
              serviceTitle: service.title,
              formElements,
            },
          ]),
        )
      }

      ToastAndroid.show(
        'Inscription enregistrée avec succèes !',
        ToastAndroid.SHORT,
      )
      this.props.navigation.navigate('Users')
    } catch (error) {
      ToastAndroid.show(
        'Nous n\'avons pas pu enregistrer votre inscription !',
        ToastAndroid.SHORT,
      )
    } finally {
      this.setState({
        isSubmitting: false,
      })
    }
  }

  renderFormField(element) {
    let formValueIndex = this.state.formElements.findIndex(
      (e) => e.value[0] === element.value[0],
    )
    const { formElements } = this.state
    switch (element.type) {
    case 'edit':
      return (
        <TextInput
          placeholder={formElements[formValueIndex].value[0]}
          onChangeText={(value) => {
            this.updateFieldValue(formValueIndex, value)
          }}
          value={formElements[formValueIndex].formValue}
          style={{ fontSize: 18, borderBottomWidth: 1, borderColor: SILVER }}
        />
      )

    case 'radioGroup':
      if (!formElements[formValueIndex].formValue) {
        this.updateFieldValue()
        this.updateFieldValue(
          formValueIndex,
          formElements[formValueIndex].value[0],
        )
      }
      return (
        <RadioGroup
          radioButtons={formElements[formValueIndex].value.map((v) => ({
            value: 'value',
            label: v,
          }))}
          onPress={(boxes) => {
            const [selectedBox] = boxes.filter((b) => b.selected)
            this.updateFieldValue(formValueIndex, selectedBox.label)
          }}
          value={formElements[formValueIndex].formValue}
        />
      )

    case 'label':
      return (
        <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 20 }}>
          {formElements[formValueIndex].value}
        </Text>
      )

    case 'switch':
      return (
        <SwitchToggle
          switchOn={formElements[formValueIndex].formValue}
          onPress={() => {
            if (formElements[formValueIndex].formValue) {
              this.updateFieldValue(formValueIndex, false)
            } else {
              this.updateFieldValue(formValueIndex, true)
            }
          }}
        />
      )
    case 'button':
      return (
        <CheckBox
          title={formElements[formValueIndex].value[0]}
          checked={formElements[formValueIndex].formValue}
          onPress={() => {
            if (formElements[formValueIndex].formValue) {
              this.updateFieldValue(formValueIndex, false)
            } else {
              this.updateFieldValue(formValueIndex, true)
            }
          }}
        />
      )
    default:
      return null
    }
  }

  render() {
    const { service, formElements, isSubmitting } = this.state
    const {
      value: [imageUri],
    } = service.elements.find((element) => element.type === 'image')
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
          <Text style={styles.screenTitle}>
            Inscription au service {service.title}
          </Text>
          <ServiceImage uri={imageUri} />
          {formElements.length
            ? formElements.map((element, index) => (
              <View
                style={{
                  paddingHorizontal: 30,
                  marginVertical: 10,
                }}
                key={index}
              >
                {this.renderFormField(element)}
              </View>
            ))
            : null}
          <View
            style={{
              marginVertical: 40,
              alignSelf: 'center',
            }}
          >
            {isSubmitting ? <ActivityIndicator /> : null}
            <Button
              buttonStyle={{
                borderRadius: 10,
                backgroundColor: GREEN,
                width: 100,
                alignSelf: 'center',
              }}
              title="Valider"
              disabled={this.hasFormErrors() || isSubmitting}
              onPress={this.saveUser}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
