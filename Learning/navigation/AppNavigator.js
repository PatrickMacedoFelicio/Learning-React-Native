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
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#ffffff' }} />
      <Stack.Screen name="Selection" component={SelectionScreen} options={{ headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#ffffff' }} />
      <Stack.Screen name="Lessons" component={LessonsScreen} options={{ headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#ffffff' }} />
      <Stack.Screen name="LessonDetail" component={LessonDetailScreen} options={{ headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#ffffff' }} />
      <Stack.Screen name="Demo" component={DemoScreen} options={{ headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#ffffff' }} />
      <Stack.Screen name="Exercises" component={ExercisesScreen} options={{ headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#ffffff' }} />
      <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} options={{ headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#ffffff' }} />
    </Stack.Navigator>
  );
}
