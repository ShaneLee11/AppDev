import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { Header } from './common';


class Rewards extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="train" style={{ fontSize: 24 }} />
          )
  }
  
  render() {
    return (
    <View>
    <Header headerText="Rewards" />
    <Text> Home Screen </Text>
    <Text> Home Screen </Text>
    <Text> Home Screen </Text>
    </View>
  );
  }
}

export default Rewards;
