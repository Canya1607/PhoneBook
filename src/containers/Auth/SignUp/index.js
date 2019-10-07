import React, {Component} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import AuthInput from '../../../components/AuthInput';
import AuthInputPass from '../../../components/AuthInputPass';
import styles from './styles';

class SignUp extends Component {
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
          <AuthInput text="Login" />
          <AuthInputPass text="Password" />
          <AuthInputPass text="Repeat Password" />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <View>
              <Text>Have an account? Log In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignUp;
