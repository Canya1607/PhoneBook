import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';

class Details extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Details</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Details;
