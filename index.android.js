// @flow

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Home from './src/Home';

export default class HowMuchMoneyDoISave extends Component { // eslint-disable-line
  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('HowMuchMoneyDoISave', () => HowMuchMoneyDoISave);
