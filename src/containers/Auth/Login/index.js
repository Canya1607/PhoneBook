import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Login</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
