import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function LessonCard({ lesson, navigation }) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('LessonDetail', { lesson })}
    >
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.description}>{lesson.description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d6ecff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});