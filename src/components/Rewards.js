import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, Image, StyleSheet } from 'react-native';
import { Content, Icon, Left } from 'native-base';
import { AppHeader } from './common';

import firebase from '@firebase/app';
import '@firebase/database';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const equalWidth =  (width / 2 ) 

class Rewards extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="md-cube" style={{ fontSize: 24 }} />
    )
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    {this.readRewards()}
  }

  _keyExtractor = (item, index) => item.key;

  readRewards() {
    var me  = this;
    firebase.database().ref('/Rewards').once('value', function(snapshot) {
      if (me.state.rewards) {
        me.state.rewards = snapshot.val();
      } else {
        me.setState( { rewards: snapshot.val() });
      }
    });
  }

  renderRowItem = (itemData) => {
    return (
      <View style="padding: 10">
        <Image style={{ height: 150,  width : equalWidth}} source={{ uri: itemData.item.imageUrl ? itemData.item.imageUrl : "https://sample-videos.com/img/Sample-jpg-image-500kb.jpg" }} resizeMode='cover' />
        <Text>{itemData.item.name}</Text>
      </View>
    )
  }

  render() {
    return (
      <Content>
        <AppHeader headerText="Rewards" navigate={this.props.navigation} />

        <ScrollView>
          <FlatList
            data={this.state.rewards}
            numColumns={2}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderRowItem}
          />
        </ScrollView>
        
      </Content>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  itemContainer: {
    width: width,
    height: height,
  },
  item: {
    flex: 1,
    margin: 3,
    padding: 10,
    backgroundColor: 'lightblue',
  }
});

export default Rewards;
