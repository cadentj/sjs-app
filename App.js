import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import MyComponent from './views/Calendar';
import { Provider as PaperProvider } from 'react-native-paper';



export default function App() {
  return (
    <PaperProvider>
      <MyComponent/>
    </PaperProvider>
  );
}