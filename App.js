import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  ScrollView
} from "react-native";
import {
  FormLabel,
  Input,
  FormValidationMessage,
  Button,
  ThemeProvider,
  Radio,
  CheckBox
} from "react-native-elements";
import serviceProvider from "./assets/service.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.service = serviceProvider.services.map(function(item) {
      return {
        title: item.title,
        imageUrl: item.elements[0].value[0]
      };
    });
    this.serviceContent = serviceProvider.services[0].elements.map(function(
      field
    ) {
      return {
        section: field.section,
        type: field.type,
        value: field.value,
        mandatory: field.mandatory
      };
    });
  }

  state = {
    name: ""
  };

  getItem = event => {
    this.setState({
      name: event
    });
  };

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

class ImageService extends React.Component {
  render() {
    return (
      <View style={imageStyle.container}>
        <Image
          style={{
            marginTop: 50,
            height: 100,
            width: 100
          }}
          source={{ uri: this.props.img }}
        />
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const imageStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class FormService extends React.Component {
  render() {
    return (
      <View>
        {this.props.service.map((element, index) => {
          return <GenerateForm element={element} key={index} />;
        })}
      </View>
    );
  }
}

class GenerateForm extends React.Component {
  renderInput() {
    const { element } = this.props;

    switch (element.type) {
      case "edit":
        return <Input placeholder={element.value[0]} />;

      case "radioGroup":
        return element.value.map(value => (
          <CheckBox title={value} key={value} />
        ));

      case "label":
        return <Input placeholder={element.value[0]} />;

      case "switch":
        return <Text>Eh j'parle pas de la console hein..</Text>;
    }
  }

  render() {
    return <View>{this.renderInput()}</View>;
  }
}
