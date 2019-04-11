import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  Animated,
  Easing,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from 'utils/styles'
import { BLACK, GREEN, BLUE } from 'utils/colors'

// Gifs
import wonderWomanGif from 'images/wonder-woman.gif'
import saltBaeGif from 'images/salt-bae.gif'
import elonMuskGif from 'images/elon-musk.gif'
import danceGuyGif from 'images/dance-guy.gif'

const DEVELOPERS = [
  {
    lastname: 'DUPONT',
    firstname: 'David',
    gif: danceGuyGif,
  },
  {
    lastname: 'BOUCHEZ',
    firstname: 'Guillaume',
    gif: elonMuskGif,
  },
  {
    lastname: 'BOUT',
    firstname: 'Émilie',
    gif: wonderWomanGif,
  },
  {
    lastname: 'BENTIFRAOUINE',
    firstname: 'Sid Ali',
    gif: saltBaeGif,
  },
]

const GifModal = props => {
  return (
    <Modal animationType="slide" transparent={false} visible={true}>
      <View style={styles.topRightAbsolute}>
        <TouchableOpacity onPress={props.onHide}>
          <Icon name="times" size={40} color={BLUE} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: '500', color: BLACK }}>
            {props.developer.lastname}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              fontWeight: '400',
              color: BLACK,
            }}
          >
            {props.developer.firstname}
          </Text>
        </View>
        <Image
          overflow="hidden"
          borderRadius={10}
          style={{
            borderColor: 'red',
            borderRadius: 100,
            borderWidth: 2,
            overflow: 'hidden',
          }}
          source={props.developer.gif}
        />
      </View>
    </Modal>
  )
}

export default class DeveloperList extends React.Component {
  static navigationOptions = {
    title: 'Développeurs',
    selectedDeveloper: {},
  }

  state = {
    isModalVisible: false,
    // spinValue: 0,
  }

  componentDidMount() {
    // this.spinValue.setValue(0)
    // Animated.timing(this.spinValue, {
    //   toValue: 1,
    //   duration: 4000,
    //   easing: Easing.linear,
    // }).start(() => this.spin())
  }

  hideModal = () => {
    this.setState({ isModalVisible: false })
  }

  openGifScreen = developer => {
    this.selectedDeveloper = developer
    this.setState({ isModalVisible: true })
  }

  render() {
    return (
      <View
        style={[styles.listContainer, { marginTop: 20, alignSelf: 'center' }]}
      >
        {this.state.isModalVisible ? (
          <GifModal
            onHide={this.hideModal}
            developer={this.selectedDeveloper}
          />
        ) : null}
        <Text style={styles.screenTitle}>Développeurs</Text>
        <View style={{ marginTop: 30 }}>
          {/* Developers sorted by their lastname. */}
          {DEVELOPERS.sort((a, b) => a.lastname > b.lastname).map(developer => {
            return (
              <View key={developer.lastname} style={{ marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{ fontSize: 20, fontWeight: '400', color: BLACK }}
                  >
                    {developer.lastname}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 18,
                      fontWeight: '300',
                      color: BLACK,
                    }}
                  >
                    {developer.firstname}
                  </Text>
                </View>
                <View style={{ marginVertical: 10, alignSelf: 'flex-end' }}>
                  <TouchableOpacity
                    onPress={() => this.openGifScreen(developer)}
                  >
                    <Icon name="laugh-wink" size={30} color={GREEN} />
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
