/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {default as LoginScreen} from '../containers/Auth/Login';
import {default as ContactsScreen} from '../containers/Main/Contacts';
import {default as DetailsScreen} from '../containers/Main/Details';


import React from 'react';
import {SafeAreaView, Text, Button, View, TextInput} from 'react-native';
import Storage from '../async-storage';
class TestScreen extends React.Component {
  state = {
    response1: null,
    response2: null,
    response3: null,
    userId: '1',
  };

  async componentWillMount() {
    const response1 = await Storage.getUsers();
    const response3 = await Storage.getContacts();
    this.setState({response1, response3});
  }

  renderUsers = () => {
    const resp = this.state.response1;
    let els = [];
    resp.map((x, index) => els.push(<Text key={index.toString()} style={{fontSize: 24}}>{`id: ${x.id}; login: ${x.login}`}</Text>));
    return els;
  };

  renderContacts = () => {
    const resp = this.state.response3;
    let els = [];
    resp.map((x, index) => {
      // { id: 1, name: "NAME", surname: "SURNAME", work: "WORK", address: "ADDRESS", phone: "PHONE"}
      const text = `id: ${x.id}; name: ${x.name}; surname: ${x.surname}; work: ${x.work}; address: ${x.address}, phone: ${x.phone}`;
      els.push(<Text key={index.toString()}>{text}</Text>);
    });
    return els;
  };

  setUser = async obj => {
    await Storage.addUser(obj);
    const response1 = await Storage.getUsers();
    this.setState({response1});
  };

  setContact = async obj => {
    await Storage.addContact(obj);
    const response3 = await Storage.getContacts();
    this.setState({response3});
  }

  getUser = async () => {
    const {userId} = this.state;
    const response2 = await Storage.getUser(userId);
    this.setState({response2});
  }

  delUser = async id => {
    console.log('DELETEUSER-------------------------------DELETEUSER');
    await Storage.removeUser(id);
    const response1 = await Storage.getUsers();
    this.setState({response1});
  }

  render() {
    const user = {login: 'Login', password: 'hashedPass'};
    const contact = { id: 1, name: "NAME", surname: "SURNAME", work: "WORK", address: "ADDRESS", phone: "PHONE"};
    return (
      <SafeAreaView style={{alignItems: 'center', flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>{this.state.response1 && this.renderUsers()}</View>
          <View style={{flex: 1}}>{this.state.response3 && this.renderContacts()}</View>
        </View>
        <View>
          <Button
            title={'setUser()'}
            onPress={() => this.setUser(user)}
          />
          <Button
            title={'setContact()'}
            onPress={() => this.setContact(contact)}
          />
          <Text>{this.state.response2 && `id: ${this.state.response2.id}; login: ${this.state.response2.login}`}</Text>
          <Button
            title={'CLEAR'}
            onPress={() => {Storage._clearAll('Olexandr'); this.setState({response1: null, response3: null})}}
          />
          <Button
            title={'Get User'}
            onPress={() => this.getUser()}
          />
          <Button
            title={'Delete User by ID'}
            onPress={() => this.delUser(this.state.userId)}
          />
          <TextInput
            style={{width: 300, backgroundColor: '#1E5878', fontSize: 24, padding: 6}}
            placeholder="HERE"
            placeholderTextColor="white"
            value={this.state.userId}
            onChangeText={(text) => this.setState({userId: parseInt(text, 36)})}
          />
        </View>
      </SafeAreaView>
    );
  }
}


const MainStack = createStackNavigator(
  {
    Contacts: ContactsScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Contacts',
    mode: 'modal',
  },
);

const RootSwitch = createSwitchNavigator({
  //TODO: Change TestScreen on LoginScreen
  // Auth: TestScreen,
  Auth: LoginScreen,
  Main: MainStack,
});

const AppContainer = createAppContainer(RootSwitch);

export default AppContainer;
