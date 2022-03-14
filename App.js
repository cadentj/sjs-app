import React from 'react';
import { View } from 'react-native';
import BottomNav from './components/BottomNav';
import { Appbar, DarkTheme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import TopAppBar from './components/AppBar';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './components/Drawer';


const theme = {
  ...DarkTheme,
};

export default function App() {
  return (

    <PaperProvider theme={theme}>
      <TopAppBar/>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
      <NavigationContainer theme={theme}>
        <BottomNav />
      </NavigationContainer>
    </PaperProvider>
  );
}