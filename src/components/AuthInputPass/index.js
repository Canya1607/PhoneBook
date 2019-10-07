/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TextInput, Text, Image} from 'react-native';
import styles from '../AuthInput/styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

class AuthInputPass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true,
    };
  }

  render() {
    const props = this.props;
    const image = {
      eyeOpened: require('../../assets/images/eye_open.png'),
      eyeClosed: require('../../assets/images/eye_close.png'),
    };
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
        <TextInput
          style={styles.input}
          value={props.value}
          secureTextEntry={this.state.hide}
          textBreakStrategy="balanced"
        />
        <View style={{position: 'absolute', paddingRight: 10}}>
          <TouchableWithoutFeedback
            onPress={() => this.setState({hide: !this.state.hide})}>
            <Image
              source={this.state.hide ? image.eyeClosed : image.eyeOpened}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default AuthInputPass;
