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
    userId: '1',
  };

  async componentWillMount() {
    const response1 = await Storage.getUsers();
    this.setState({response1});
  }

  renderLogins = () => {
    const resp = this.state.response1;
    let els = [];
    resp.map((x, index) => els.push(<Text key={index.toString()} style={{fontSize: 24}}>{`id: ${x.id}; login: ${x.login}`}</Text>));
    return els;
  };

  setGet = async obj => {
    await Storage.addUser(obj);
    const response1 = await Storage.getUsers();
    this.setState({response1});
  };

  getUser = async () => {
    const {userId} = this.state;
    const response2 = await Storage.getUser(userId);
    this.setState({response2});
  }

  delUser = async id => {
    console.log('DELETEUSER-------------------------------DELETEUSER');
    const result = await Storage.removeUser(id);
    const response1 = await Storage.getUsers();
    this.setState({response1});
  }

  render() {
    const user = {login: 'Login', password: 'hashedPass'};
    return (
      <SafeAreaView style={{alignItems: 'center', flex: 1}}>
        <View style={{flex: 1}}>{this.state.response1 && this.renderLogins()}</View>
        <View>
          <Button
            title={'setGet()'}
            onPress={() => this.setGet(user)}
          />
          <Text>{this.state.response2 && `id: ${this.state.response2.id}; login: ${this.state.response2.login}`}</Text>
          <Button
            title={'CLEAR'}
            onPress={() => {Storage._clearAll('Olexandr'); this.setState({response1: null})}}
          />
          <Button
            title={'Get User'}
            onPress={() => this.getUser()}
          />
          <Button
            title={'Delete by ID'}
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
  },
);

const RootSwitch = createSwitchNavigator({
  //TODO: Change TestScreen on LoginScreen
  Auth: TestScreen,
  Main: MainStack,
});

const AppContainer = createAppContainer(RootSwitch);

export default AppContainer;
