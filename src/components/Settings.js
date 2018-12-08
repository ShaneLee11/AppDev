import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';


class Settings extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="settings" style={{ fontSize: 24 }} />
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
        <Text>Settings Screen</Text>
      </View>
      </View>
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
