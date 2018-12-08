import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common/Header';
import { Icon } from 'native-base';

class Notifications extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="notifications" style={{ fontSize: 24 }} />
          )
  }
  render() {
    return (
    <View>
    <Header headerText="Notifications" />
    <Text> Home Screen </Text>
    <Text> Home Screen </Text>
    <Text> Home Screen </Text>
    </View>
  );
  }
}

export default Notifications;
