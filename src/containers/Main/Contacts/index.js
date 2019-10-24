/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Contact from '../../../components/Contact';
import ContactCreate from '../../../components/ContactCreate';
import Storage from '../../../async-storage';
import connector from './connector';
import styles from './styles';

class Contacts extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  };

  state = {
    data: null,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    console.log(prevState);
    if (JSON.stringify(prevState.data) !== JSON.stringify(nextProps.activeContacts)) {
      return {
        data: nextProps.activeContacts,
      };
    }
    return null;
  }

  async componentDidMount() {
    console.log('componentDidMount');
    console.log(this);
    this.focusListener = this.props.navigation.addListener('willFocus',async () => {
      await Storage.getContactsById(this.props.activeUser.id);
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  onDelete = async contactObj => {
    await Storage.removeContact(contactObj);
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ContactCreate navigation={navigation} userId={this.props.activeUser.id} />
        <FlatList
          data={this.state.data}
          initialNumToRender={9}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({item}) => (
            <Contact navigation={navigation} contact={item} onDelete={() => this.onDelete(item)} />
          )}
        />
      </SafeAreaView>
    );
  }
}

export default connector(Contacts);
