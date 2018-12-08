import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, StatusBar, Spinner } from 'react-native';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import { Asset, AppLoading } from 'expo';
import LoginForm from './src/components/LoginForm';
import firebase from '@firebase/app';
import '@firebase/auth';

import HomeScreen from './src/components/HomeScreen';
import Settings from './src/components/Settings';
import Notifications from './src/components/Notifications';
import History from './src/components/History';
import Payment from './src/components/Payment';
import Help from './src/components/Help';
import Rewards from './src/components/Rewards';
import Profile from './src/components/Profile';

const { width } = Dimensions.get('window')

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, loggedIn: null };
  }

  componentDidMount() {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyBBCUH6Z9dYPiVK_zDBFkodmYqzp1fPy6Q',
    //   authDomain: 'auth-5d612.firebaseapp.com',
    //   databaseURL: 'https://auth-5d612.firebaseio.com',
    //   projectId: 'auth-5d612',
    //   storageBucket: 'auth-5d612.appspot.com',
    //   messagingSenderId: '544181894629'
    // });

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ loggedIn: true });
    //   } else {
    //     this.setState({ loggedIn: false });
    //   }
    // });
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  renderContent() {
    // switch (this.state.loggedIn) {
    //   case true:
        return (
          <HomeScreen />
       );
    //   case false:
    //     return <LoginForm />;
    //   default:
    //     return <Spinner size="large" />;
    // }
  }

  render() {
    if (this.state.loading) {
      return  <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
      />;
    }

    return (
      
      <View>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <AppContainer/>
      //   {/* {this.renderContent()} */}
      </View>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems {...props} />
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

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
