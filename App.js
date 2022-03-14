import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import BottomNav from './components/BottomNav';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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
      <BottomNav/>
    </PaperProvider>
  );
}