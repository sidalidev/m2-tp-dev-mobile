import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  FormLabel,
  Input,
  FormValidationMessage,
  Button,
  ThemeProvider
} from "react-native-elements";
import serviceProvider from "./assets/service.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.service = serviceProvider.services.map(function(item) {
      return {
        name: item.title,
        label: item.elements[0].value[0]
      };
    });
  }

  state = {
    name: ""
  };

  getItem = event => {
    console.log(event);
    this.setState({
      name: event
    });
  };

  render() {
    console.log(this.service[0].label);

    return (
      <View style={styles.container}>
        <Image
          style={{
            height: 50,
            width: 50
          }}
          source={{ uri: this.service[0].label }}
        />
        <Text>{serviceProvider.services[0].title}</Text>

        <Input onChangeText={this.getItem} value={this.state.name} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
