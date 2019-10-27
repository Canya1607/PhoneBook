/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Contact from '../../../components/Contact';
import ContactCreate from '../../../components/ContactCreate';
import Storage from '../../../async-storage';
import connector from './connector';
import size from '../../../constants/size';
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

  changePosition = (position, Y) => {
    const {data} = this.state;
    let newPosition = position + Math.floor(Y / size.contactHeight) + (Y < 0 ? 1 : 0);
    if (newPosition > data.length - 1) {
      newPosition = data.length - 1;
    } else if (newPosition < 0) {
      newPosition = 0;
    }
    const tmp = data[position];
    data[position] = data[newPosition];
    data[newPosition] = tmp;
    this.setState({data: data});
  };

  renderContacts = () => {
    const {navigation} = this.props;
    const {data} = this.state;
    let comps = [];
    for (let i = 0; i < data.length; i++) {
      const el = data[i];
      comps.push(
        <Contact
          childKey={el.name + i}
          position={i}
          lastPosition={data.length - 1}
          onChangePosition={this.changePosition}
          navigation={navigation}
          contact={el}
          onDelete={() => this.onDelete(el)}
        />,
      );
    }

    return comps;
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ContactCreate navigation={navigation} userId={this.props.activeUser.id} />
        {this.renderContacts()}
      </SafeAreaView>
    );
  }
}

export default connector(Contacts);
