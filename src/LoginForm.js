import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import firebase from 'firebase';
import Input from './Input'
import Spinner from './Spinner'

export default class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onBtnPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => this.onLoginSucces())
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => this.onLoginSucces())
          .catch(() => this.onLoginFailed())
      })
  }

  onLoginFailed(){
    this.setState({ error: 'Sjebao si se', loading: false })
  }

  onLoginSucces(){
    this.setState({error: '', email: '', password: '', loading: false})
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />
    }
    return (
      <TouchableOpacity onPress={() => this.onBtnPress()} style={styles.loginBtn}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.inputCont}>
          <Input
            placeholder="email@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            placeholder="password"
            label="Password"
            style={styles.textInputs}
            value={this.state.password}
            secureText={true}
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <Text style={styles.errorText}>{this.state.error}</Text>

        <View style={{ width: '100%', marginTop: 20 }}>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    width: '100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputCont: {
    width: '100%',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
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
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});
