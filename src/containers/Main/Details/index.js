/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, View, Text, Linking, Alert} from 'react-native';
import Dividers from '../../../components/Divider';
import Avatar from '../../../components/Avatar';
import Field from '../../../components/Field';
import HeaderChecked from '../../../components/HeaderChecked';
import {CREATE, EDIT, SHOW} from '../../../constants/detailsTypes';
import styles from './styles';

class Details extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight:
        navigation.getParam('type') === EDIT ? <HeaderChecked onPress={() => alert("Edited!")} /> : null,
    };
  }

  state = {
    isModalVisible: false,
  };

  render() {
    const {navigation} = this.props;
    const editable = navigation.getParam('type') ===  SHOW ? false : true;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.avatar}>
          <Avatar />
        </View>
        <Dividers.Divider />
        <Field text={"Ім'я"} placeholder={"Ім'я..."} value={navigation.getParam('name')} editable={editable} />
        <Dividers.Divider />
        <Field text={'Прізвище'} placeholder={'Прізвище...'} value={navigation.getParam('surname')} editable={editable} />
        <Dividers.Divider />
        <Field text={'Посада'} placeholder={'Посада...'} value={navigation.getParam('work')} editable={editable} />
        <Dividers.Divider />
        <Field text={'Адреса'} placeholder={'Адреса...'} value={navigation.getParam('address')} editable={editable} />
        <Dividers.Divider />
        <Field text={'Мобільний'} placeholder={'Мобільний...'} value={navigation.getParam('phone')} editable={editable} />
        <Dividers.FullDivider />
        <Dividers.FlexDivider />
        <View style={styles.credits}>
          <Text>Icon made by </Text>
          <Text
            style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.flaticon.com/authors/freepik')}>
            Freepik
          </Text>
          <Text> from </Text>
          <Text
            style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.flaticon.com/')}>
            Flaticon
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export {
  
}

export default Details;
