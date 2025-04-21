import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function LessonDetailScreen({ route }) {
  const { lesson } = route.params;

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.description}>{lesson.description}</Text>
        <Text style={styles.more_description}>{lesson.more_description}</Text>
        <Text style={styles.title}>Exemplo:</Text>
        <Text style={styles.code}>{lesson.code}</Text>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  description: {
    fontSize: 17,
    marginBottom: 16,
    color: '#bbbbbb',
    textAlign: 'justify',
  },
  more_description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'justify',
  },
  code: {
    fontFamily: 'monospace',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    borderWidth: 2,
    borderColor: '#fb2576',
  },
});