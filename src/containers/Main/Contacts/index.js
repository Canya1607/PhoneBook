/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {SafeAreaView, Text, SectionList, FlatList} from 'react-native';
import Contact from '../../../components/Contact';
import ContactCreate from '../../../components/ContactCreate';
import styles from './styles';

const data = [
  {name: 'Anton', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 53', phone: '+380964821833'},
  {name: 'Alex', surname: 'Babiy', work: 'IT STEP Student', address: 'Zhovkivska 54', phone: '+380947104745'},
  {name: 'Jack', surname: 'Buyakov', work: 'Web Designer', address: 'Zhovkivska 55', phone: '+380964821833'},
  {name: 'Jamily', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 56', phone: '+380964821833'},
  {name: 'Jan', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 57', phone: '+380964821833'},
  {name: 'Sasha', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 58', phone: '+380964821833'},
  {name: 'Slavik', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 59', phone: '+380964821833'},
  {name: 'Vova', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 67', phone: '+380964821833'},
  {name: 'Vasya', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 72', phone: '+380964821833'},
  {name: 'Anton', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 53', phone: '+380964821833'},
  {name: 'Alex', surname: 'Babiy', work: 'IT STEP Student', address: 'Zhovkivska 54', phone: '+380947104745'},
  {name: 'Jack', surname: 'Buyakov', work: 'Web Designer', address: 'Zhovkivska 55', phone: '+380964821833'},
  {name: 'Jamily', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 56', phone: '+380964821833'},
  {name: 'Jan', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 57', phone: '+380964821833'},
  {name: 'Sasha', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 58', phone: '+380964821833'},
];

class Contacts extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  };

  onDelete = (obj) => {
    //TODO: Implement when redux will be ready
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ContactCreate navigation={navigation} />
        <FlatList
          data={data}
          initialNumToRender={9}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({item}) => (
            <Contact navigation={navigation} contact={item} />
          )}
        />
      </SafeAreaView>
    );
  }
}

export default Contacts;
