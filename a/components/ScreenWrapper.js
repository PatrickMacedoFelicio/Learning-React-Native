import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function ScreenWrapper({ children, style }) {
  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={[styles.content, style]}>
        {children}
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
