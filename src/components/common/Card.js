import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={[{flex:props.height, backgroundColor:'white', justifyContent:props.justifyContent},styles.containerStyle]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    alignItems:'center',
    marginHorizontal: 5,
    marginVertical: 10,
    paddingVertical: 10

    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
  }
};

export { Card };
