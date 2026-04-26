import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ConversorContainer } from './screens/Conversor/container';

export default function App() {
  return (
    <>
      {/* Usando dark status bar porque nosso tema de fundo é light/off-white */}
      <StatusBar style="dark" />
      <ConversorContainer />
    </>
  );
}
