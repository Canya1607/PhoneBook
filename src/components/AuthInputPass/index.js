/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TextInput, Image, TouchableWithoutFeedback} from 'react-native';
import styles from '../AuthInput/styles';

class AuthInputPass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true,
    };
  }

  render() {
    const {image, text, value, onChange} = this.props;
    const images = {
      lock: require('../../assets/images/lock.png'),
      unlock: require('../../assets/images/unlock.png'),
    };
    return (
      <View style={styles.container}>
        <Image source={image} />
        <TextInput
          style={styles.input}
          value={value}
          placeholder={text}
          placeholderTextColor={'#808080'}
          secureTextEntry={this.state.hide}
          onChangeText={onChange}
        />
        <View style={{position: 'absolute', paddingRight: 10}}>
          <TouchableWithoutFeedback
            onPress={() => this.setState({hide: !this.state.hide})}>
            <Image
              style={{}}
              source={this.state.hide ? images.lock : images.unlock}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default AuthInputPass;
