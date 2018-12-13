import React, { Component } from 'react';
import { View, Text, Platform, LayoutAnimation,
  StyleSheet, ScrollView, UIManager, TouchableOpacity } from 'react-native';
//import { Header } from './common/Header';
import { Icon, Header, Left } from 'native-base';

class Accordion_Panel extends Component {

  constructor() {
    super();
    this.state = {
      updated_Height: 0
    }
  }

  componentWillReceiveProps(update_Props) {
    if (update_Props.item.expanded) {
      this.setState(() => {
        return {
          updated_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          updated_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(update_Props, nextState) {

    if (update_Props.item.expanded !== this.props.item.expanded) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <View style={styles.Panel_Holder}>
        <TouchableOpacity activeOpacity={0.7} onPress={this.props.onClickFunction} style={styles.Btn}>
          <Text style={styles.Panel_Button_Text}>{this.props.item.title} </Text>
        </TouchableOpacity>
        <View style={{ height: this.state.updated_Height, overflow: 'hidden' }}>
          <Text style={styles.Panel_text}>
            {this.props.item.body}
          </Text>
        </View>
      </View>
    );
  }
}

class Help extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="md-help-circle" style={{ fontSize: 24 }} />
          )
  }

  constructor() {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    const array = [
      { expanded: false, title: "How to use", body: "Locate nearest station on the App -> Scan the QR code on the Station -> Powerbank would be in your hands -> Return at any station" },
      { expanded: false, title: "Where are the stations located", body: "There are 300 stations in Singapore, 1000 stations in Australia and 500 in New York. We are working to bring the service to more locations. Do link us up with keen partners and we would strive to bring SURGE to you real soon" },
      { expanded: false, title: "I have an issue", body: "Do drop us a mail with the issue you are facing and we aim to respond as quickly as possible Help@surge.sg" },

      ];

    this.state = { AccordionData: [...array] }
  }

  update_Layout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = this.state.AccordionData.map((item) => {
      const newItem = Object.assign({}, item);
      newItem.expanded = false;
      return newItem;
    });

    array[index].expanded = true;
    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 40 }}>
        {
          this.state.AccordionData.map((item, key) =>
            (
              <Accordion_Panel key={key} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
            ))
        }
      </ScrollView>
      </View>
      );
  }
}

export default Help;





const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  Panel_text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },

  Panel_Button_Text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21
  },

  Panel_Holder: {
    borderWidth: 1,
    borderColor: '#FF6F00',
    marginVertical: 5
  },

  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  }

});
