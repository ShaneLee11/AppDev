import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
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

        <ScrollView style={{flex:1, backgroundColor:'white'}} contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Rewards Screen</Text>
          </View>
        </ScrollView>
      </Content>
      );
  }
}

export default Rewards;
