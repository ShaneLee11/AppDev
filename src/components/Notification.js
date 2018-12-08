import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { Header } from './common';


class Notification extends Component {
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

export default Notification;
