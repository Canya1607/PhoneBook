import React, {Component} from 'react';
import {SafeAreaView, View, Text, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

class Contacts extends Component {
  state = {
    avatarSource: null,
  };

  myFunction = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = {uri: response.uri};

        // You can also display the image using data:
        const source = {uri: 'data:image/jpeg;base64,' + response.data};
        console.log("URI" + response.uri);
        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  render() {
    const {avatarSource} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <Image style={{width: 300, height: 400}} source={avatarSource} />
          <Button title="Pick Image" onPress={() => this.myFunction()} />
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
