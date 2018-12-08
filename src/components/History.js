import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common/Header';
import { Icon } from 'native-base';


class History extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="clock" style={{ fontSize: 24 }} />
          )
  }

  render() {
    return (
    <View>
    <Header headerText="History" />
    <Text> History Screen </Text>
    <Text> History Screen </Text>
    <Text> History Screen </Text>
    </View>
  );
  }
}

export default History;
