// @flow
/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]*/
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["convertToDecimal"] }] */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainter: {
    backgroundColor: 'red',
  },
  label: {
    color: 'black',
  },
  input: {
    color: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Home extends Component { // eslint-disable-line

  constructor(props: any) {
    super(props);
    this.state = {
      savedAmmount: 0.0,
      monthlyAmmount: 0.0,
      incomeTax: 0.0,
      monthCount: 0,
    };

    this._onSavedAmmountChanged = this._onSavedAmmountChanged.bind(this);
  }

  state: {
    savedAmmount: number;
    monthlyAmmount: number;
    incomeTax: number;
    monthCount: number;
  }

  convertToDecimal(text: string): number {
    if (!text || isNaN(parseFloat(text))) {
      return 0.0;
    }
    const result: number = parseFloat(text.replace(/[^0-9]+/, ''));
    return result / 100;
  }

  _onSavedAmmountChanged = (text: string) => {
    const result = this.convertToDecimal(text);
    console.log(`result: ${result} - text: ${text}`);
    this.setState({
      savedAmmount: result,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainter}>
          <Text style={styles.label}>
            How much do you have saved?
          </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Type here how much you have saved"
            onChangeText={this._onSavedAmmountChanged}
          >{this.state.savedAmmount.toFixed(2)}</TextInput>
        </View>
      </View>
    );
  }
}
