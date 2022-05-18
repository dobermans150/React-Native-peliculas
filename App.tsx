import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Navigation } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      />
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
