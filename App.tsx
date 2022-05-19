import { NavigationContainer } from '@react-navigation/native';
import React, { FC, useContext } from 'react';
import { StatusBar } from 'react-native';
import { GradientContext, GradientProvider } from './src/context/gradiantContext';
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

const CustomStatusBar: FC = () => {

  const { colors } = useContext(GradientContext);

  return (
    <StatusBar
      backgroundColor={colors.primary}
      animated={true}
      showHideTransition="fade"
    />
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>

        <CustomStatusBar />

        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
