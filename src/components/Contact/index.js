/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Platform,
  Image,
  Alert,
  Animated,
  PanResponder,
} from 'react-native';
import {EDIT, SHOW} from '../../constants/detailsTypes';
import size from '../../constants/size';
import styles from './styles';

const phoneOS = Platform.OS === 'android' ? 'tel:' : 'tel://';

class Contact extends React.Component {
  state = {
    isElevated: false,
    opacity: new Animated.Value(1),
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('UNSAFE_componentWillReceiveProps ' + nextProps.childKey);
    console.log(nextProps);
    Animated.timing(this.animatedValue, {
      toValue: {x: 0, y: 0},
      delay: 80,
      duration: 500,
    }).start();
  }

  UNSAFE_componentWillMount() {
    const {position, lastPosition, onChangePosition} = this.props;
    this.animatedValue = new Animated.ValueXY();
    this._value = {x: 0, y: 0};
    this.animatedValue.addListener(value => (this._value = value));

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.toggleEvevation();
        Animated.timing(this.state.opacity, {
          toValue: 0.75,
          duration: 500,
        }).start();
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y,
        });
        this.animatedValue.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: 0, dy: this.animatedValue.y},
      ]),
      onPanResponderRelease: (e, gestureState) => {
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 500,
        }).start();
        this.animatedValue.flattenOffset();
        if (this._value.y < 2 && this._value.y > -2) {
          this.nextShow();
        } else if (this._value.y < size.contactHeight && this._value.y > -size.contactHeight) {
          Animated.timing(this.animatedValue, {
            toValue: {x: 0, y: 0},
            delay: 80,
            duration: 500,
          }).start();
        } else if (position === 0 && this._value.y < -size.contactHeight) {
          Animated.timing(this.animatedValue, {
            toValue: {x: 0, y: 0},
            delay: 80,
            duration: 500,
          }).start();
        } else if (position === lastPosition && this._value.y > size.contactHeight) {
          Animated.timing(this.animatedValue, {
            toValue: {x: 0, y: 0},
            delay: 80,
            duration: 500,
          }).start();
        } else {
          onChangePosition(position, this._value.y);
        }
        setTimeout(() => this.toggleEvevation(), 580);
      },
    });
  }

  toggleEvevation = () => {
    this.setState({isElevated: !this.state.isElevated});
  };

  nextShow = () => {
    const {navigation} = this.props;
    const {id, userId, avatar, name, surname, work, address, phone} = this.props.contact;
    navigation.navigate('Details', {
      type: SHOW,
      id, userId,
      avatar, name, surname, work, address, phone,
    });
  }

  askDelete = () => {
    const {onDelete} = this.props;
    const {name} = this.props.contact;
    Alert.alert(`Do you want to delete ${name} ?`, '', [
        {
          text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel',
        },
        {
          text: 'OK', onPress: onDelete, style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };

  render() {
    const {childKey, navigation, contact} = this.props;
    const {id, userId, avatar, name, surname, work, address, phone} = this.props.contact;
    const {isElevated, opacity} = this.state;
    const animatedStyle = {
      zIndex: isElevated ? 1 : 0,
      opacity: opacity,
      transform: this.animatedValue.getTranslateTransform(),
    };
    return (
      <Animated.View
        key={childKey}
        style={[styles.container, animatedStyle]}
        {...this.panResponder.panHandlers}>
        <View style={styles.contact}>
          <Image
            style={styles.avatar}
            source={
              avatar
                ? avatar
                : require('../../assets/images/avatar_default.png')
            }
          />
          <Text style={styles.contact_text}>{contact.name}</Text>
        </View>
        <TouchableOpacity onPress={() => Linking.openURL(`${phoneOS}${phone}`)}>
          <Image
            style={styles.call}
            source={require('../../assets/images/call.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              type: EDIT,
              id, userId,
              avatar, name, surname, work, address, phone,
            })
          }>
          <Image
            style={styles.edit}
            source={require('../../assets/images/edit.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.askDelete()}>
          <Image
            style={styles.delete}
            source={require('../../assets/images/delete.png')}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default Contact;
