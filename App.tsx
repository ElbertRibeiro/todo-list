import React, { Component } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/homePage';
export default function App() {
  return (
    <View>
      <StatusBar style="auto"/>
      <Home />
    </View>
  );
}