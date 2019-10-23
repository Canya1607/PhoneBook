/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import AuthInput from '../../../components/AuthInput';
import AuthInputPass from '../../../components/AuthInputPass';
import AuthButton from '../../../components/AuthButton';
import Storage from '../../../async-storage';
import connector from './connector';
import styles from './styles';

class Login extends Component {
  state = {
    activeUser: null,

    hideRepeat: true,
    login: '',
    password: '',
    repeatPassword: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    console.log(prevState);
    if (JSON.stringify(nextProps.activeUser) !== JSON.stringify(prevState.activeUser)) {
      console.log("GET DERIVED STATE FROM PROPS")
      return {
        activeUser: nextProps.activeUser,
      };
    }
    return null;
  }

  renderRepeat = () => {
    return (
    <AuthInputPass
      text="Repeat Password"
      image={require('../../../assets/images/keyhole.png')}
      value={this.state.repeatPassword}
      onChange={(text) => this.setState({repeatPassword: text})}/>
    );
  }

  async checkAndContinue() {
    const {hideRepeat, login, password, repeatPassword} = this.state;
    let userObj = {
      login: login,
      password: password,
    };
    if (login && password) {
      if (hideRepeat) {
        await Storage.getUser(userObj);
      } else {
        if (password === repeatPassword) {
          await Storage.addUser(userObj);
        }
      }

      console.log(this.state.activeUser);
      if (this.state.activeUser) {
        this.props.navigation.navigate('Main');
      }
    }
  }

  render() {
    //
    console.log(this.props);
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
            onPress={() => this.checkAndContinue()} />
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
