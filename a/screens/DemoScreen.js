import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function DemoScreen() {
  return (
    <ScreenWrapper>
      <Text style={styles.text}>Essa é uma tela de demonstração!</Text>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#ffffff',
  },
});