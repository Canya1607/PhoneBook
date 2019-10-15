import React, {Component} from 'react';
import {SafeAreaView, Text, SectionList} from 'react-native';
import Contact from '../../../components/Contact';
import styles from './styles';

const Data = [
  {
    title: 'A',
    data: ['Anton', 'Alex'],
  },
  {
    title: 'J',
    data: ['Jack', 'Jamily', 'Jan'],
  },
  {
    title: 'S',
    data: ['Sasha', 'Slavik'],
  },
  {
    title: 'V',
    data: ['Vova', 'Vasya'],
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
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <Contact navigation={navigation} name={item} />
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
