import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import RootNaivgation from './navigation';
import { colors } from './utils';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <RootNaivgation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
});

export default App;
