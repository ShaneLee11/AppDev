import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Header, Left, Right, Icon, Body, Title, Container, Button } from 'native-base';


class HomeScreen extends Component {
  render() {
    return (
      <Container>        
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>

        <Text> Home Screen </Text>
        <Text> Home Screen </Text>
        <Text> Home Screen </Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreen;


// npm install native-base
// DrawerNavigator -> link to individual page - > npm install react-navigation@2.6.2 or 3.0 & npm install
//Mapview with markers -> link to backend api to show markers
//location button -> pull location finder from phone
//list Button -> link to list page
//ScanQR Button -> list to QR page
