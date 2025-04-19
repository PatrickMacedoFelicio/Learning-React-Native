import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import SelectionScreen from '../screens/SelectionScreen';
import LessonsScreen from '../screens/LessonsScreen';
import LessonDetailScreen from '../screens/LessonDetailScreen';
import DemoScreen from '../screens/DemoScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import ExerciseDetailScreen from '../screens/ExerciseDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Selection" component={SelectionScreen} />
      <Stack.Screen name="Lessons" component={LessonsScreen} />
      <Stack.Screen name="LessonDetail" component={LessonDetailScreen} />
      <Stack.Screen name="Demo" component={DemoScreen} />
      <Stack.Screen name="Exercises" component={ExercisesScreen} />
      <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />
    </Stack.Navigator>
  );
}