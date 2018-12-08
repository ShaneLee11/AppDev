import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { Header } from './common';


class Help extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="chatboxes" style={{ fontSize: 24 }} />
          )
  }
  
  render() {
    return (
    <View>
    <Header headerText="Help" />
    <Text> Help Screen </Text>
    <Text> Help Screen </Text>
    <Text> Help Screen </Text>
    </View>
  );
  }
}

export default Help;

//accordion
