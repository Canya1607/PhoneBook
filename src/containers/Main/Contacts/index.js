import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';

class Contacts extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Contacts</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Contacts;
