import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LicoesScreen from '../screens/LicoesScreen';
import LicoesDetalhadaScreen from '../screens/LicoesDetalhadaScreen';
import DemoScreen from '../screens/DemoScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={HomeScreen} />
      <Stack.Screen name="Lessons" component={LicoesScreen} />
      <Stack.Screen name="LessonDetail" component={LicoesDetalhadaScreen} options={{ title: 'Detalhes da Lição' }} />
      <Stack.Screen name="Demo" component={DemoScreen} />
    </Stack.Navigator>
  );
}