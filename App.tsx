import React from 'react';
import Routes from './routes';
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
      <Routes />
    </PaperProvider>
  );
}

