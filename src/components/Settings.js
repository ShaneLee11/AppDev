import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Content } from 'native-base';
import { AppHeader } from './common';

class Settings extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="settings" style={{ fontSize: 24 }} />
          )
  }
  render() {
    return (
      <Content>
        <AppHeader headerText="Settings" navigate={this.props.navigation} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Settings Screen</Text>
        </View>
      </Content>
      );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
