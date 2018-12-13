import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Left, Right, Icon, Content, Body, Title } from 'native-base';
import { AppHeader } from './common';


class HomeScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon : () => (
      <Icon name="home" style={{ fontSize: 24 }} />
    )
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content>
        <AppHeader headerText="Home" navigate={this.props.navigation} />
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is the home screen where the map is to be found. 
            with a List button, ScanQR button and location get button</Text>
        </View>
      </Content>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    color: "#000"
  },
  icon: {
    color: '#fff',
  }
})
