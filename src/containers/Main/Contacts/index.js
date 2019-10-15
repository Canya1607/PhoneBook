import React, {Component} from 'react';
import {SafeAreaView, View, Text, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

class Contacts extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <Text>Contacts</Text>
        </View>
        <View>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Contacts;
