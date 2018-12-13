import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, CardSection } from './common';
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
  }

  render() {
    return (
      <View>
        <Header headerText="Profile" />

        <Text> Profile Screen </Text>
        <Text> Profile Screen </Text>
        <Text> Profile Screen </Text>

        <CardSection>
          <Button onPress={this.onLogoutPress.bind(this)}>
            Logout
          </Button>
        </CardSection>
      </View>
    );
  }
}

export default Profile;
