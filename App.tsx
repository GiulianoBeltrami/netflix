import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import Home from './src/pages/home';

import {DefaultTheme ,Provider as PaperProvider } from 'react-native-paper'
import {StatusBar} from 'react-native'


export default function App() {

  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary:"#E50914",
      background:"#3c3c3c",
      placeholder:"#ffffff",
      text:"#ffffff"
    }
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#000"/>
      <Home />
    </PaperProvider>
  );
}

