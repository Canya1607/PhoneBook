/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, View, Text, Linking, Alert} from 'react-native';
import Dividers from '../../../components/Divider';
import Avatar from '../../../components/Avatar';
import Field from '../../../components/Field';
import SaveButton from '../../../components/SaveButton';
import HeaderChecked from '../../../components/HeaderChecked';
import {CREATE, EDIT, SHOW} from '../../../constants/detailsTypes';
import Storage from '../../../async-storage';
import styles from './styles';

class Details extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight:
        navigation.getParam('type') === EDIT ? <HeaderChecked onPress={() => alert("Edited!")} /> : null,
    };
  }

  state = {
    name: null,
    surname: null,
    work: null,
    address: null,
    phone: null,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("! !");
    console.log(nextProps);
    console.log(' !');
    console.log(prevState);
    return null;
  }

  sendData = async () => {
    const {name, surname, work, address, phone} = this.state;
    const userId = this.props.navigation.getParam('userId');
    if (name && phone) {
      await Storage.addContact({userId, name, surname, work, address, phone});
      this.props.navigation.push('Contacts');
    } else {
      Alert.alert('Помилка', "Ім'я або мобільний не введені", [{text: 'OK'}], {cancelable: false});
    }
  }

  render() {
    console.log(this);
    const {navigation} = this.props;
    console.log(navigation.getParam('userId'));
    const editable = navigation.getParam('type') ===  SHOW ? false : true;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.avatar}>
          <Avatar />
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
        { navigation.state.params.type === CREATE ? <SaveButton onPress={() => this.sendData()} /> : null }
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
