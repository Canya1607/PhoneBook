/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import AuthInput from '../../../components/AuthInput';
import AuthInputPass from '../../../components/AuthInputPass';
import AuthButton from '../../../components/AuthButton';
import styles from './styles';

class Login extends Component {
  state = {
    hideRepeat: true,
    placeholdersOn: [true, true, true],
    login: null,
    password: null,
  };

  renderRepeat = () => {
    return (
      <AuthInputPass
        text="Repeat Password"
        image={require('../../../assets/images/keyhole.png')}
        placeholderOn={this.state.placeholdersOn[2]}
        onFocus={() => this.togglePlaceholder(2)}
        onBlur={() => this.togglePlaceholder(2)}/>
    );
  }

  checkAndContinue = () => {
    //TODO: Validate input fields
    this.props.navigation.navigate('Main');
  }

  togglePlaceholder = (index) => {
    const {placeholdersOn} = this.state;
    placeholdersOn[index] = !placeholdersOn[index];
    this.setState({placeholdersOn: placeholdersOn});
  };

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.image}>
            <Image
              style={styles.phonebook}
              source={require('../../../assets/images/phonebook.png')}
            />
          </View>
          <AuthInput
            text="Login"
            placeholderOn={this.state.placeholdersOn[0]}
            onFocus={() => this.togglePlaceholder(0)}
            onBlur={() => this.togglePlaceholder(0)}/>
          <AuthInputPass
            text="Password"
            image={require('../../../assets/images/key.png')}
            placeholderOn={this.state.placeholdersOn[1]}
            onFocus={() => this.togglePlaceholder(1)}
            onBlur={() => this.togglePlaceholder(1)}/>
          {this.state.hideRepeat ? null : this.renderRepeat()}
          <AuthButton
            text="Continue"
            onPress={this.checkAndContinue} />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => this.setState({hideRepeat: !this.state.hideRepeat})}>
            <View>
              <Text style={styles.bottom_text}>{this.state.hideRepeat ? 'Not Registered? Sign Up' : 'Have an account? Log In'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
