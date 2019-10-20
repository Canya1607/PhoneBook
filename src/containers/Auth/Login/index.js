/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import AuthInput from '../../../components/AuthInput';
import AuthInputPass from '../../../components/AuthInputPass';
import AuthButton from '../../../components/AuthButton';
import connector from './connector';
import styles from './styles';

class Login extends Component {
  state = {
    hideRepeat: true,
    login: '',
    password: '',
    repeatPassword: '',
  };

  renderRepeat = () => {
    return (
    <AuthInputPass
      text="Repeat Password"
      image={require('../../../assets/images/keyhole.png')}
      value={this.state.repeatPassword}
      onChange={(text) => this.setState({repeatPassword: text})}/>
    );
  }

  checkAndContinue = () => {
    const {login, password} = this.state;
    //TODO: Validate input fields
    // if (login === '1' && password === '1') {
    //   this.props.navigation.navigate('Main');
    // } else {
    //   alert('Incorrect Login or Password');
    // }
    this.props.navigation.navigate('Main');
  }

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
            value={this.state.login}
            onChange={(text) => this.setState({login: text})}/>
          <AuthInputPass
            text="Password"
            image={require('../../../assets/images/key.png')}
            value={this.state.password}
            onChange={(text) => this.setState({password: text})}/>
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

export default connector(Login);
