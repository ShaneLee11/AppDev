import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppHeader } from './common';
import { Icon, Content } from 'native-base';


class History extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="clock" style={{ fontSize: 24 }} />
          )
  }

  render() {
    return (
    <Content>
      <AppHeader headerText="History" navigate={this.props.navigation} />
      <Text> History Screen </Text>
      <Text> History Screen </Text>
      <Text> History Screen </Text>
    </Content>
  );
  }
}

export default History;
