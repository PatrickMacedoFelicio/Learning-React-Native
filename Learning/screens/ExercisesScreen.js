import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { exercises } from '../data/exercises';
import ExercisePreviewCard from '../components/ExercisePreviewCard';

export default function ExercisesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExercisePreviewCard exercise={item} navigation={navigation} />
        )}
      />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#dddddd',
    textAlign: 'center',
    marginBottom: 20,
  },
});