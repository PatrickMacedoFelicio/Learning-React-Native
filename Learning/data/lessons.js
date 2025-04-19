export const lessons = [
  {
    id: '1',
    title: 'O que é React Native?',
    description: 'Introdução ao framework de desenvolvimento mobile.',
    more_description: 'React Native é uma biblioteca JavaScript criada pelo Facebook que permite criar aplicativos móveis para iOS e Android usando apenas JavaScript.',
    code: `Exemplo básico de componente:

import { Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Olá, React Native!</Text>
    </View>
  );
}`
  },
  {
    id: '2',
    title: 'Componentes Básicos',
    description: 'Aprenda os principais componentes do React Native.',
    more_description: '',
    code: `Componentes como View, Text, Image e TextInput são blocos fundamentais.

Exemplo:

import { View, Text, TextInput } from 'react-native';

export default function MyComponent() {
  return (
    <View>
      <Text>Digite seu nome:</Text>
      <TextInput placeholder="Nome" />
    </View>
  );
}`
  },
  {
    id: '3',
    title: 'States e Props',
    description: 'Entenda como funciona o estado e as propriedades.',
    more_description: '',
    code: `import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}`
  },
  {
    id: '4',
    title: 'Estilização Simples',
    description: 'Como aplicar estilos básicos em componentes.',
    more_description: '',
    code: `import { View, Text, StyleSheet } from 'react-native';

export default function Estilo() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Título Estilizado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    color: 'blue',
  },
});`
  }
];