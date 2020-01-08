/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import CenaPrincipal from './components/cenaPrincipal';


const App: () => React$Node = () => {
  return (
    <CenaPrincipal />
  );
};

const styles = StyleSheet.create({
});

export default App;
