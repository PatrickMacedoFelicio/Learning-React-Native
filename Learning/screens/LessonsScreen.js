import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { lessons } from '../data/lessons';
import LessonCard from '../components/LessonCard';

export default function LessonsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <text style={styles.texto}>teste</text>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LessonCard lesson={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20,  backgroundColor: '#121212',},
  texto: {
    fontSize: 20,
    color: '#bbbbbb',
    textAlign: 'justify',
    marginBottom: 20,
  },
});
