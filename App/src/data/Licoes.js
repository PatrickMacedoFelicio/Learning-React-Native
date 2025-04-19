export const lessons = [
    {
      id: '1',
      title: 'O que é React Native?',
      theory: 'React Native é um framework que permite criar apps nativos usando JavaScript e React.',
      code: `import { Text } from 'react-native';
  
  export default function App() {
    return <Text>Olá React Native!</Text>;
  }`
    },
    {
      id: '2',
      title: 'Componentes Básicos',
      theory: 'Os componentes básicos incluem View, Text, Button, etc.',
      code: `import { View, Text } from 'react-native';
  
  export default function App() {
    return (
      <View>
        <Text>Componente Básico</Text>
      </View>
    );
  }`
    },
    {
      id: '3',
      title: 'States e Props',
      theory: 'State armazena dados internos, Props são parâmetros passados para componentes.',
      code: `import { useState } from 'react';
  import { View, Text, Button } from 'react-native';
  
  export default function App() {
    const [contador, setContador] = useState(0);
  
    return (
      <View>
        <Text>{contador}</Text>
        <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
      </View>
    );
  }`
    },
    {
      id: '4',
      title: 'Estilização Simples',
      theory: 'A estilização é feita com o objeto StyleSheet.',
      code: `import { View, Text, StyleSheet } from 'react-native';
  
  export default function App() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Texto Estilizado</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    texto: {
      fontSize: 20,
      color: 'blue',
    },
  });`
    },
  ];