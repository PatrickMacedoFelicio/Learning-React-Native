import React from 'react';
import { FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { lessons } from '../data/lessons';
import ScreenWrapper from '../components/ScreenWrapper';

export default function LessonsScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('LessonDetail', { lesson: item })}
            style={styles.lessonItem}
          >
            <Text style={styles.lessonTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  lessonItem: {
    padding: 15,
    backgroundColor: '#1e1e1e',
    marginBottom: 10,
    borderRadius: 8,
  },
  lessonTitle: {
    fontSize: 16,
    color: '#ffffff',
  },
});