import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppHeader } from './common';
import { Icon, Content } from 'native-base';


class Payment extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="md-card" style={{ fontSize: 24 }} />
          )
  }
  render() {
    return (
    <Content>
      <AppHeader headerText="Payment" navigate={this.props.navigation} />
      <Text> Payment Screen </Text>
      <Text> Payment Screen </Text>
      <Text> Payment Screen </Text>
    </Content>
  );
  }
}

export default Payment;
