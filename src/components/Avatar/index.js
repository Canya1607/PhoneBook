import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

class Avatar extends React.Component {
  state = {
    source: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.source !== prevState.source) {
      return {
        source: nextProps.source,
      };
    }
    return null;
  }

  myFunction = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        // cameraRoll: true,
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
        const source = {uri: `file://${response.path}`};

        // You can also display the image using data:
        // const source = {uri: 'data:image/jpeg;base64,' + response.data};
        this.props.onChange(source);
      }
    });
  };

  render() {
    const {source} = this.state;
    return (
      <TouchableOpacity
        onPress={() => (this.props.active ? this.myFunction() : null)}>
        <View style={styles.container}>
          <Image
            style={styles.container}
            source={
              source
                ? source
                : require('../../assets/images/avatar_default.png')
            }
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default Avatar;
