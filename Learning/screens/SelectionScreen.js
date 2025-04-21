import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aprenda 📚</Text>
      <Text style={styles.texto}>alsdflasdlfasl lasflsdfals dfla sldfa slfals flas dfla sldf asldfl asldllsadflas</Text>
      <View style={styles.buttonContainer}>
        <Button title="Aprender Conceitos" onPress={() => navigation.navigate('Lessons')} color="#FB2576"/>
      </View>
      <Text style={styles.title}>Pratique 👨🏻‍💻</Text>
      <Text style={styles.texto}>alsdflasdlfasl lasflsdfals dfla sldfa slfals flas dfla sldf asldfl asldllsadflas</Text>
      <View style={styles.buttonContainer}>
        <Button title="Exercícios Práticos" onPress={() => navigation.navigate('Exercises')} color="#FB2576"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  texto: {
    fontSize: 16,
    color: '#bbbbbb',
    textAlign: 'justify',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#ffffff',
  },
  buttonContainer: {
    marginTop: 10,
    width: '70%',
    fontSize: 20,
    marginBottom: 20,
  },
});
