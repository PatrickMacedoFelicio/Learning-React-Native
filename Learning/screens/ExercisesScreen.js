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
  container: { flex: 1, padding: 20 },
});