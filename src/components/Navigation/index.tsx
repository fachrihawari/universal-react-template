import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from 'screens/HomeScreen';
import AboutScreen from 'screens/AboutScreen';
import { isReadyRef, navigationRef, routeNameRef } from 'libraries/navigation';

const Stack = createStackNavigator();

const config = {
  screens: {
    Home: '/',
    About: '/about',
  },
};

const linking = {
  prefixes: [], // TODO: Add env variable to set  'https://localhost:3000', 'mychat://'
  config,
};

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        linking={linking}
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
          routeNameRef.current =
            navigationRef?.current?.getCurrentRoute()?.name ?? null;
        }}
        onStateChange={() => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName =
            navigationRef?.current?.getCurrentRoute()?.name ?? null;
          if (previousRouteName !== currentRouteName) {
            // TODO: Implement event tracking here
          }
          routeNameRef.current = currentRouteName;
        }}>
        <Stack.Navigator screenOptions={{ animationEnabled: true }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
