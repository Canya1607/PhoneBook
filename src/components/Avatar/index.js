import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

class Avatar extends React.Component {
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
        this.setState({avatarSource: source});
      }
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this.myFunction()}>
        <View style={styles.container}>
          <Image
            style={styles.container}
            source={
              this.state.avatarSource === null
                ? require('../../assets/images/avatar_default.png')
                : this.state.avatarSource
            }
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default Avatar;
