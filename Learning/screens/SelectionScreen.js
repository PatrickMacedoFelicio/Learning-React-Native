import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que você deseja fazer?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Aprender Conceitos" onPress={() => navigation.navigate('Lessons')} color="#1e90ff" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Exercícios Práticos" onPress={() => navigation.navigate('Exercises')} color="#00c896" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});
