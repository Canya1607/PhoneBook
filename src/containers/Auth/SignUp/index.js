import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';

class SignUp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Sign Up</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignUp;
