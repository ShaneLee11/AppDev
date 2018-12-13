import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from '../components/LoginForm';
import Register from '../components/Register';
import ForgotPassword from '../components/ForgotPassword';


const AuthStack = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPassword: { screen: ForgotPassword }
  }, {
      initialRouteName: 'Login'
});

  export { AuthStack }