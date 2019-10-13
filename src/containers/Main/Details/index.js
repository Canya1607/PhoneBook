/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Dividers from '../../../components/Divider';
import Avatar from '../../../components/Avatar';
import styles from './styles';
import size from '../../../constants/size';

class Details extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center', marginVertical: 16}}>
          <Avatar />
        </View>
        <Dividers.Divider />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{marginVertical: 16, marginHorizontal: size.Width * 0.05}}>
            Details
          </Text>
          <Dividers.HeightDivider />
        </View>
        <Dividers.Divider />
        <Text style={{marginVertical: 16, marginLeft: size.Width * 0.05}}>
          |
        </Text>
        <Dividers.Divider />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{marginVertical: 16, marginHorizontal: size.Width * 0.05}}>
            Details
          </Text>
          <Dividers.HeightDivider />
        </View>
        <Dividers.Divider />
        <Text style={{marginVertical: 16, marginLeft: size.Width * 0.05}}>
          |
        </Text>
        <Dividers.Divider />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{marginVertical: 16, marginHorizontal: size.Width * 0.05}}>
            Details
          </Text>
          <Dividers.HeightDivider />
        </View>
        <Dividers.FullDivider />
        <Dividers.FlexDivider />
      </SafeAreaView>
    );
  }
}

export default Details;
