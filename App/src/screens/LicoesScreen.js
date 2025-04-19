import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { lessons } from '../data/lessons';

export default function LessonsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('LessonDetail', { lesson: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.demoButton} onPress={() => navigation.navigate('Demo')}>
        <Text style={styles.demoText}>Ir para Demonstração</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
  },
  demoButton: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  demoText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});