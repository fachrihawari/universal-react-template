import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { navigate } from 'libraries/navigation';

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>About Screen!</Text>
      <Button title="Back to Home" onPress={() => navigate('Home')} />
    </View>
  );
}

AboutScreen.navigationOptions = {
  title: 'About',
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
});

export default AboutScreen;
