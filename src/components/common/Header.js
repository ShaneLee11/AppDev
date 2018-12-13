// Import libraries for making a component
import React from 'react';
import { Header, Left, Right, Icon, Body, Title } from 'native-base';

// Make a component
const AppHeader = (props) => {
  const { textStyle, viewStyle } = styles;
  
  return (
    <Header style={viewStyle}>
      <Left>
        <Icon name="menu" onPress={() => props.navigate.openDrawer()} />
      </Left>
      <Body>
        <Title style={textStyle}>{props.headerText}</Title>
      </Body>
      <Right />
    </Header>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export { AppHeader };
