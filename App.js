import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase'
import LoginForm from './src/LoginForm'
import Spinner from './src/Spinner'

export default class App extends Component {

  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBGk5bfXWhm5GYtddMnQ7ILSlQwSBBOLl4',
      authDomain: 'auth-f5be1.firebaseapp.com',
      databaseURL: 'https://auth-f5be1.firebaseio.com',
      projectId: 'auth-f5be1',
      storageBucket: 'auth-f5be1.appspot.com',
      messagingSenderId: '748554665806'
    }
    );

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return (
          <TouchableOpacity onPress={()=> firebase.auth().signOut()} style={styles.loginBtn}>
            <Text style={styles.loginText}>Log out</Text>
          </TouchableOpacity>
        )
      case false:
        return (<LoginForm />);
        dafault:
        return (<Spinner size='large' />)
    }


  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  loginBtn: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'blue',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  loginText: {
    color: 'blue',
    textAlign: 'center'
  },
});
