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
    isLogin: true,
    login: '',
    password: '',
    repeatPassword: '',
  };

  //TODO: Remove in Release
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    console.log(prevState);
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
    const {isLogin, login, password, repeatPassword} = this.state;
    let userObj = {login, password};

    if (login && password) {
      if (isLogin) {
        await Storage.getUser(userObj);
      } else {
        if (password === repeatPassword) {
          await Storage.addUser(userObj);
        }
      }

      console.log(this.props.activeUser);
      if (this.props.activeUser) {
        this.props.navigation.navigate('Main');
      }
    }
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
            onChange={text => this.setState({login: text})}
          />
          <AuthInputPass
            text="Password"
            value={this.state.password}
            image={require('../../../assets/images/key.png')}
            onChange={text => this.setState({password: text})}
          />
          {this.state.isLogin ? null : this.renderRepeat()}
          <AuthButton
            text="Continue"
            onPress={() => this.checkAndContinue()}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => this.setState({isLogin: !this.state.isLogin})}>
            <View>
              <Text style={styles.bottom_text}>{this.state.isLogin ? 'Not Registered? Sign Up' : 'Have an account? Log In'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default connector(Login);
