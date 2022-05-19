import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { GradientProvider } from './src/context/gradiantContext';
import { Navigation } from './src/navigation/Navigation';


interface AppStateProps {
  children: JSX.Element | JSX.Element[]
}

const AppState: FC<AppStateProps> = ({ children }) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StatusBar
          hidden={true}
        />
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
