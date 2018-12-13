import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppHeader } from './common';
import { Icon, Content } from 'native-base';

class Notifications extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="notifications" style={{ fontSize: 24 }} />
    )
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Content>
      <AppHeader headerText="Notifications" navigate={this.props.navigation} />

      <Text> Home Screen </Text>
      <Text> Home Screen </Text>
      <Text> Home Screen </Text>
    </Content>
  );
  }
}

export default Notifications;
