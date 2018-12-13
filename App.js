import React from 'react';
import { TouchableOpacity, ActivityIndicator, AsyncStorage, StyleSheet, View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems, createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { Content, StyleProvider, AppLoading } from 'native-base';
import getTheme from './native-base-theme/components';
import HomeScreen from './src/components/HomeScreen';
import Settings from './src/components/Settings';
import Notifications from './src/components/Notifications';
import History from './src/components/History';
import Payment from './src/components/Payment';
import Help from './src/components/Help';
import Rewards from './src/components/Rewards';
import Profile from './src/components/Profile';
import LoginForm from './src/components/LoginForm';
import Register from './src/components/Register';
import ForgotPassword from './src/components/ForgotPassword';

import firebase from '@firebase/app';
import '@firebase/auth';

const { width } = Dimensions.get('window')

export default class App extends React.Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBBCUH6Z9dYPiVK_zDBFkodmYqzp1fPy6Q',
      authDomain: 'auth-5d612.firebaseapp.com',
      databaseURL: 'https://auth-5d612.firebaseio.com',
      projectId: 'auth-5d612',
      storageBucket: 'auth-5d612.appspot.com',
      messagingSenderId: '544181894629'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <StyleProvider style={getTheme()}>
          <AppStackNavigator/>
        </StyleProvider>
      );
    } else {
      return (
        <StyleProvider style={getTheme()}>
          <AppDrawerNavigator />
        </StyleProvider>
      );
    }
  }
}


const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems {...props} />

      <TouchableOpacity style={{ width:'100%', height:50, justifyContent:'center', alignItems:'center'}} 
      onPress={() => firebase.auth().signOut() }
      >
        <Text style={{fontSize:15, fontWeight:'500'}}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Notifications: Notifications,
  History: History,
  Rewards: Rewards,
  Payment: Payment,
  Help: Help,
  Settings: Settings,
  Profile: Profile
}, {
  contentComponent: CustomDrawerComponent,
})

const AppStackNavigator = createStackNavigator({
  SignIn: LoginForm,
  Register: Register,
  ForgotPassword: ForgotPassword
}, {
  initialRouteName:'SignIn'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
