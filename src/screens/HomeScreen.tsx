import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { navigate } from 'libraries/navigation';
import Example from 'components/common/Example';

function HomeScreen() {
  const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
    web: 'Press Cmd+R to reload browser,\n' + 'Cmd+Shift+C for dev menu',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Universal React Template!</Text>
      <Example />
      <Text style={styles.instructions}>
        To get started, edit{' '}
        <Text style={styles.sourceFile}>src/screens/HomeScreen.tsx</Text>
      </Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <Button title="Go to About" onPress={() => navigate('About')} />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Welcome',
};

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    opacity: 1,
  },
  sourceFile: {
    fontWeight: '800',
  },
});

export default HomeScreen;
