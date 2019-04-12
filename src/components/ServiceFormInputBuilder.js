import React from 'react'

export default class ServiceFormInputBuilder extends React.Component {
  state = {
    data: this.constructTabForCheckBox(),
    formValue: [],
    switchOn: true,
  }

  constructTabForCheckBox() {
    const { element } = this.props
    let tab = []
    let label = ''
    let v = ''
    element.value.map(
      (value) => ((label = value), (v = value), tab.push({ v, label })),
    )
    return tab
  }

  sendData() {
    this.props.sendData(this.state.formValue[0])
  }

  onPress = (data) => this.setState({ data })

  onSwitchPress = () => {
    this.setState({ switchOn: !this.state.switchOn })
  }

  render() {
    return this.renderInput()
  }
}
