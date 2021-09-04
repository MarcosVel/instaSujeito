import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './src/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' />
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
