import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from '@firebase/app';
import '@firebase/auth';


class ForgotPassword extends Component {
  state = { email: '', error: '', loading: false };

  static navigationOptions = {
    title: 'Reset Password',
  };


  onResetPassword = () => {
    const { email } = this.state;

    firebase.auth()
    .sendPasswordResetEmail(email)
    .then((response) => {
      console.log('response ------ ', response)
    })
    .catch((error)=> {
      console.log('response ------ ', error)
      this.setState({ error: 'Authentication Failed', loading: false });
    });
  }

  renderResetButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
  
    return (
      <Button onPress={this.onResetPassword.bind(this)}>
        Reset Password
      </Button>
    );
  }

  render() {
    return (
      <Card height={1} color='transparent' justifyContent='flex-start'>
        <Card height={0.4} color='transparent' justifyContent='space-around'>
          <CardSection>
            <Input
            label='Email'
            placeholder='user@email.com'
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            />
          </CardSection>

          <Text style={styles.errorTextStyle} >
            {this.state.error}
          </Text>

            <Card height={0.3} justifyContent='center'>
            <CardSection>
                {this.renderResetButton()}
          </CardSection>
        </Card>
        </Card>
        
       

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  viewStyle: {
    // backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    // paddingTop: 15,
    shadowOpacity: 0.2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    justifyContent: 'center'
  }
};

export default ForgotPassword;
