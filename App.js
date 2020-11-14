/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Onboarding from './src/screens/Authentication/Onboarding/Onboarding';
import Welcome from './src/screens/Authentication/Welcome';
import Login from './src/screens/Authentication/Login';
import Perfil from './src/screens/Authentication/Perfil';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Onboarding /> */}
      {/* <Welcome /> */}
      {/* <Login /> */}
      <Perfil />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default App;
