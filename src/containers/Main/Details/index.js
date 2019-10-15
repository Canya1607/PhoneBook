/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, View, Text, Linking} from 'react-native';
import Dividers from '../../../components/Divider';
import Avatar from '../../../components/Avatar';
import Field from '../../../components/Field';
import styles from './styles';

class Details extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.avatar}>
          <Avatar />
        </View>
        <Dividers.Divider />
        <Field text={"Ім'я"} placeholder={"Ім'я..."} value={navigation.getParam('name')} />
        <Dividers.Divider />
        <Field text={'Прізвище'} placeholder={'Прізвище...'} />
        <Dividers.Divider />
        <Field text={'Посада'} placeholder={'Посада...'} />
        <Dividers.Divider />
        <Field text={'Адреса'} placeholder={'Адреса...'} />
        <Dividers.Divider />
        <Field text={'Мобільний'} placeholder={'Мобільний...'} />
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

export default Details;
