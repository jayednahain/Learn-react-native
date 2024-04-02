import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import L44Counter from './App/Lessons/L44Counter';
import L46GenerateRandomColors from './App/Lessons/L46GenerateRandomColors';
//06- 043

export default function App() {
  return (
    <View>
      {/* <L44Counter/> */}
      <L46GenerateRandomColors/>
    </View>
  )
}

const styles = StyleSheet.create({})