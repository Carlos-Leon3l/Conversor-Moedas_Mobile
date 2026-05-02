import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ConversorContainer } from './screens/Conversor/container';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <ConversorContainer />
    </>
  );
}
