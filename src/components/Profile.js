import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppHeader, Button, CardSection } from './common';
import { Icon, Content } from 'native-base';
import firebase from '@firebase/app';
import '@firebase/auth';

class Profile extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="md-contact" style={{ fontSize: 24 }} />
    )
  }

  onLogoutPress() {
    firebase.auth().signOut();
    <TouchableOpacity style={{ width:'100%', height:50, justifyContent:'center', alignItems:'center'}} 
      onPress={() => props.navigation.navigate('SignIn') }
      >
        <Text style={{fontSize:15, fontWeight:'500'}}>Logout</Text>
      </TouchableOpacity>
  }

  render() {
    return (
      <Content>
        <AppHeader headerText="Profile" navigate={this.props.navigation} />

        <Text> Profile Screen </Text>
        <Text> Profile Screen </Text>
        <Text> Profile Screen </Text>

        <CardSection>
          <Button onPress={this.onLogoutPress.bind(this)}>
            Logout
          </Button>
        </CardSection>
      </Content>
    );
  }
}

export default Profile;
