import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Header, Button, Spinner } from './components/common';
//import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import HomeScreen from './components/HomeScreen';
import firebase from '@firebase/app';
import '@firebase/auth';



class App extends Component {
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
   }

   async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

   firebase.auth().onAuthStateChanged((user) => {
         if (user) {
           this.setState({ loggedIn: true });
         } else {
           this.setState({ loggedIn: false });
         }
       });
     }

     renderContent() {
       switch (this.state.loggedIn) {
         case true:
           return (
             <HomeScreen />
          );
         case false:
           return <LoginForm />;
         default:
           return <Spinner size="large" />;
       }
     }

     render() {
       return (
         <View>
           <StatusBar
              backgroundColor="blue"
              barStyle="light-content"
            />
           {this.renderContent()}
         </View>
       );
     }
   }

   export default App;
