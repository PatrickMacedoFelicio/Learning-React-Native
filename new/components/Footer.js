import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 Patrick Macêdo Felicio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
  },
});
