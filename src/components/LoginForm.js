import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
//import firebase from 'firebase';
import firebase from '@firebase/app';
import '@firebase/auth';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

onButtonPress() {
  const { email, password } = this.state;

  this.setState({ error: '', loading: true  });

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    });
}

onLoginFail() {
  this.setState({ error: 'Authentication Failed', loading: false });
}

onLoginSuccess() {
  this.setState({
    email: '',
    password: '',
    loading: false,
    error: ''
  });
}

renderButton() {
  if (this.state.loading) {
    return <Spinner size='small' />;
      }
// if else logic
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
      Log in
      </Button>
    );
}



render() {
    return (
      <Card>
        <CardSection>
          <Input
          label='Email'
          placeholder='user@email.com'
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          />
        </CardSection>

      <CardSection>
        <Input
        placeholder='password'
        label='Password'
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
        secureTextEntry
        />
      </CardSection>

      <Text style={styles.errorTextStyle} >
        {this.state.error}
      </Text>

     <CardSection>
        {this.renderButton()}
      </CardSection>

      <CardSection>
      <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Forget Password</Text>
      </View>
      </CardSection>

      <CardSection>
      <Text style={styles.textStyle}>
      Not a member? Click here to Sign Up
      </Text>
      </CardSection>


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
      backgroundColor: '#ffff',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      paddingTop: 15,
      shadowOpacity: 0.2,
      position: 'relative'
    },
    textStyle: {
      fontSize: 20,
      justifyContent: 'center'
    }
  };






export default LoginForm;
