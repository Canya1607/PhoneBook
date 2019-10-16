/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {SafeAreaView, Text, SectionList} from 'react-native';
import Contact from '../../../components/Contact';
import styles from './styles';

const Data = [
  {
    title: 'A',
    data: [
      {name: 'Anton', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 53', phone: '+380964821833'},
      {name: 'Alex', surname: 'Babiy', work: 'IT STEP Student', address: 'Zhovkivska 54', phone: '+380947104745'},
    ],
  },
  {
    title: 'J',
    data: [
      {name: 'Jack', surname: 'Buyakov', work: 'Web Designer', address: 'Zhovkivska 55', phone: '+380964821833'},
      {name: 'Jamily', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 56', phone: '+380964821833'},
      {name: 'Jan', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 57', phone: '+380964821833'},
    ],
  },
  {
    title: 'S',
    data: [
      {name: 'Sasha', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 58', phone: '+380964821833'},
      {name: 'Slavik', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 59', phone: '+380964821833'},
  ],
  },
  {
    title: 'V',
    data: [
      {name: 'Vova', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 67', phone: '+380964821833'},
      {name: 'Vasya', surname: 'Samkov', work: 'Designer', address: 'Zhovkivska 72', phone: '+380964821833'},
    ],
  },
];

class Contacts extends Component {
  static navigationOptions = () => {
    return {
      title: 'Contacts',
    };
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={Data}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({item}) => (
            <Contact navigation={navigation} contact={item} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={{fontSize: 32}}>{title}</Text>
          )}
        />
        {/* <View>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View> */}
      </SafeAreaView>
    );
  }
}

export default Contacts;
