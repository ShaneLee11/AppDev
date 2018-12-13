import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Icon, Left } from 'native-base';


class Rewards extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="md-cube" style={{ fontSize: 24 }} />
          )
  }
  render() {
    return (
      <View>
        <Header>
          <Left>
           <Icon name="menu" onPress={() =>
           this.props.navigation.openDrawer()} />
          </Left>
        </Header>
        <View style={{ flex: 1, alignItems: 'center', justifyContent:
      'center' }}>
        <Text>Rewards Screen</Text>
      </View>
      </View>
      );
  }
}

export default Rewards;
