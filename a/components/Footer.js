import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 Mini Tutorial React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#1a1e29',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
  },
});
