import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';


export default class Spinner extends Component {

    render() {
        return (
            <View style={styles.container}>
            <ActivityIndicator color='black' size={this.props.size || 'large'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
