/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, View, Text, Linking, Alert} from 'react-native';
import Dividers from '../../../components/Divider';
import Avatar from '../../../components/Avatar';
import Field from '../../../components/Field';
import SaveButton from '../../../components/SaveButton';
import {CREATE, SHOW} from '../../../constants/detailsTypes';
import Storage from '../../../async-storage';
import styles from './styles';

class Details extends Component {
  state = {
    avatar: '',
    name: '',
    surname: '',
    work: '',
    address: '',
    phone: '',
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    console.log(prevState);
    const { params } = nextProps.navigation.state;
    if (params.name !== prevState.name) {
      if (params.surname !== prevState.surname) {
        if (params.work !== prevState.work) {
          if (params.phone !== prevState.phone) {
            if (params.avatar !== prevState.avatar) {
              return {
                avatar: params.avatar,
                name: params.name,
                surname: params.surname,
                work: params.work,
                address: params.address,
                phone: params.phone,
              };
            }
          }
        }
      }
    }
    return null;
  }

  inputAlert = () => {
    Alert.alert('Помилка', "Ім'я або мобільний не введені", [{text: 'OK'}], {cancelable: false});
  }

  createContact = async () => {
    const {avatar, name, surname, work, address, phone} = this.state;
    const {userId} = this.props.navigation.state.params;
    if (name && phone) {
      await Storage.addContact({userId, avatar, name, surname, work, address, phone});
      this.props.navigation.pop();
    } else {
      this.inputAlert();
    }
  }

  updateContact = async () => {
    const {id, userId} = this.props.navigation.state.params;
    const {avatar, name, surname, work, address, phone} = this.state;
    if (name && phone) {
      await Storage.updateContact({id, userId, avatar, name, surname, work, address, phone});
      this.props.navigation.pop();
    } else {
      this.inputAlert();
    }
  }

  render() {
    const {navigation} = this.props;
    const editable = navigation.getParam('type') ===  SHOW ? false : true;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.avatar}>
          <Avatar active={navigation.state.params.type === SHOW ? false : true} source={this.state.avatar} onChange={(src) => this.setState({avatar: src})} />
        </View>
        <Dividers.Divider />
        <Field text={"Ім'я"} placeholder={"Ім'я..."} value={this.state.name} editable={editable} onChangeText={text => this.setState({name: text})} />
        <Dividers.Divider />
        <Field text={'Прізвище'} placeholder={'Прізвище...'} value={navigation.getParam('surname')} editable={editable} onChangeText={text => this.setState({surname: text})} />
        <Dividers.Divider />
        <Field text={'Посада'} placeholder={'Посада...'} value={navigation.getParam('work')} editable={editable} onChangeText={text => this.setState({work: text})} />
        <Dividers.Divider />
        <Field text={'Адреса'} placeholder={'Адреса...'} value={navigation.getParam('address')} editable={editable} onChangeText={text => this.setState({address: text})} />
        <Dividers.Divider />
        <Field text={'Мобільний'} placeholder={'Мобільний...'} value={navigation.getParam('phone')} editable={editable} onChangeText={text => this.setState({phone: text})} />
        <Dividers.FullDivider />
        { navigation.state.params.type === SHOW
          ? null
          : navigation.state.params.type === CREATE
            ? <SaveButton text={'Створити'} onPress={() => this.createContact()} />
            : <SaveButton text={'Оновити'} onPress={() => this.updateContact()} />
        }
        <Dividers.FlexDivider />
      </SafeAreaView>
    );
  }
}

export default Details;
