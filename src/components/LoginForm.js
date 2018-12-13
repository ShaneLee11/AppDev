import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from '@firebase/app';
import '@firebase/auth';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  static navigationOptions = {
    title: 'Please sign in',
  };

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
    console.log('login sccuess')
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderLogInButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
  
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }


  resetPassword = () => {
   Firebase.auth()
    .sendPasswordResetEmail(email)
    .then((response) => {
      console.log('response ------ ', response)
    })
    .catch((error)=> {
      console.log('response ------ ', error)
    });
  }


  onSignUpPress() {
    console.log('props ------ ', this.props);
 this.props.navigation.navigate('Register');
  }

  renderSignUpButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
  
    return (
      <Button onPress={this.onSignUpPress.bind(this)}>
        Sign Up
      </Button>
    );
  }

  render() {
    return (
 
      <ScrollView style={{flex:1, backgroundColor:'white'}} contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>
      <Card height={1} color='transparent' justifyContent='center'>

      
        <Card height={0.7} color='transparent' justifyContent='space-around'>
        
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

          <Card height={0.5} justifyContent='center'>
            <CardSection>
              {this.renderLogInButton()}
            </CardSection>

              <TouchableOpacity style={styles.viewStyle}
              onPress={() => this.props.navigation.navigate('ForgotPassword')}
              >
                <Text style={styles.textStyle}>Forgot Password</Text>
              </TouchableOpacity>
          </Card>
          

        </Card>
        
        <Card height={0.3} justifyContent='center'>
          <CardSection>
            {this.renderSignUpButton()}
          </CardSection>
        </Card>
        
      </Card>
      </ScrollView>
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
    marginTop: 35,
    shadowOpacity: 0.2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    justifyContent: 'center'
  }
};

export default LoginForm;
