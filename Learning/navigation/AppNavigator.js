import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import SelectionScreen from '../screens/SelectionScreen';
import LessonsScreen from '../screens/LessonsScreen';
import LessonDetailScreen from '../screens/LessonDetailScreen';
import DemoScreen from '../screens/WelcomeScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import ExerciseDetailScreen from '../screens/ExerciseDetailScreen';
import QuizScreen from '../screens/QuizScreen'; 

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Selection" component={SelectionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Lessons" component={LessonsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LessonDetail" component={LessonDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Demo" component={DemoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Exercises" component={ExercisesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
