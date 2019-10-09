/* eslint-disable prettier/prettier */
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
    const {image, text, value, placeholderOn, onBlur, onFocus, onChange} = this.props;
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
          placeholder={placeholderOn === true ? text : null}
          placeholderTextColor={'#CCBBB7'}
          secureTextEntry={this.state.hide}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
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
