import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from '@firebase/app';
import '@firebase/auth';


class Register extends Component {
  state = { email: '', password: '', error: '', loading: false };

  static navigationOptions = {
    title: 'Sign Up',
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
      username:'',
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

  onSignUpPress() {
    console.log('props ------ ', this.props);
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((response) => {
            console.log('response ------- ', response)
          })
          .catch(error => {
              console.log('error ------ ', error);
            this.setState({ error: 'Authentication Failed', loading: false });
          })
      
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
        <Card height={0.7} color='transparent' justifyContent='flex-start'>
        {/* <View style={{height:'70%', width:'100%', justifyContent:'flex-start'}}> */}
        <CardSection>
            <Input
            label='Full Name'
            placeholder='username'
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            />
          </CardSection>
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

        {/* </View> */}
          
        </Card>


          <Card height={0.3} justifyContent='flex-start'>
            <CardSection>
              {this.renderSignUpButton()}
            </CardSection>

              <TouchableOpacity style={styles.viewStyle}
              onPress={() => this.props.navigation.goBack()}
              >
                <Text style={styles.textStyle}>Already Registered? Login</Text>
              </TouchableOpacity>
          </Card>
        
        {/* <Card height={0.3} justifyContent='center'>
          <CardSection>
            {this.renderSignUpButton()}
          </CardSection>
        </Card> */}


        
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
    // paddingTop: 15,
    shadowOpacity: 0.2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    justifyContent: 'center'
  }
};

export default Register;
