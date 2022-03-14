import React from 'react';
import { View } from 'react-native';
import BottomNav from './components/BottomNav';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import TopAppBar from './components/AppBar';
import { NavigationContainer } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (

    <PaperProvider theme={theme}>
      <TopAppBar />
      <NavigationContainer theme={theme}>
        <BottomNav />
      </NavigationContainer>
    </PaperProvider>
  );
}