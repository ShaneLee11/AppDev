import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class List extends Component {
  static navigationOptions = {
    title: 'List',
    header: ({ navigate }) => {
      return {
        left: <Button title='Home' onPress={() => navigate('Home')} />
      };
    }
  }

render() {
  return ()
}




}
