import React from 'react';
import { FlatList } from 'react-native';
import { exercises } from '../data/exercises';
import ExercisePreviewCard from '../components/ExercisePreviewCard';
import ScreenWrapper from '../components/ScreenWrapper';

export default function ExercisesScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExercisePreviewCard exercise={item} navigation={navigation} />
        )}
      />
    </ScreenWrapper>
  );
}
