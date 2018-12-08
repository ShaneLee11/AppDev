import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common/Header';
import { Icon } from 'native-base';


class Payment extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="md-card" style={{ fontSize: 24 }} />
          )
  }
  render() {
    return (
    <View>
    <Header headerText="Payment" />
    <Text> Payment Screen </Text>
    <Text> Payment Screen </Text>
    <Text> Payment Screen </Text>
    </View>
  );
  }
}

export default Payment;
