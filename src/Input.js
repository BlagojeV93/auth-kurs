import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default class Input extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.labelStyle}>{this.props.label}</Text>
                <TextInput
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    secureTextEntry={this.props.secureText}
                    style={styles.textInputs} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textInputs: {
        textAlign: 'center',
        backgroundColor: 'white',
        height: 40,
        borderRadius: 10,
        width: '80%',
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
});
