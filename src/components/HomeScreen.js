import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Left, Right, Icon, Content, Body, Title } from 'native-base';


class HomeScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon : () => (
      <Icon name="home" style={{ fontSize: 24 }} />
    )
  }

  render() {
    return (
      <Content>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
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
