import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content, Icon, Left } from 'native-base';
import { AppHeader } from './common';

class Rewards extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="md-cube" style={{ fontSize: 24 }} />
          )
  }
  render() {
    return (
      <Content>
        <AppHeader headerText="Rewards" navigate={this.props.navigation} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Rewards Screen</Text>
        </View>
      </Content>
      );
  }
}

export default Rewards;
