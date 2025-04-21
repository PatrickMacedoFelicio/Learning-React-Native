export const lessons = [
  {
    id: '1',
    title: '🚀 O que é React Native?',
    description: 'Introdução ao framework de desenvolvimento mobile.',
    more_description: `React Native é uma biblioteca JavaScript criada pelo Facebook que permite desenvolver aplicativos móveis nativos para Android e iOS, utilizando apenas código JavaScript e componentes React. A principal vantagem é que você escreve uma única base de código para múltiplas plataformas, economizando tempo e recursos no desenvolvimento.

Com o React Native, usamos componentes como <View>, <Text> e <Button> para construir interfaces e usamos hooks como useState para lidar com interações do usuário.`,
    code: `// Exemplo básico de componente:

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
    title: '🧱 Componentes Básicos',
    description: 'Aprenda os principais componentes do React Native.',
    more_description: `Componentes são os blocos de construção da interface no React Native. Eles funcionam como peças de LEGO para montar telas interativas e funcionais. Os principais componentes são:

- **View**: Contêiner genérico, como uma `<div>` no HTML.
- **Text**: Usado para mostrar textos.
- **Image**: Exibe imagens na tela.
- **TextInput**: Campo para entrada de texto.

Esses componentes podem ser combinados e estilizados para criar qualquer tipo de layout.`,
    code: `import { View, Text, TextInput } from 'react-native';

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
    title: '🔁 States e Props',
    description: 'Entenda como funciona o estado e as propriedades.',
    more_description: `No React Native, **state** (estado) e **props** (propriedades) são fundamentais para criar componentes dinâmicos e reutilizáveis.

- **State** representa os dados internos de um componente que podem mudar com o tempo. Usamos o hook \`useState\` para isso.
- **Props** são valores passados de um componente pai para um filho, como parâmetros de uma função.

Essa combinação permite criar interfaces interativas que reagem às ações do usuário.`,
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
    title: '🎨 Estilização Simples',
    description: 'Como aplicar estilos básicos em componentes.',
    more_description: `A estilização no React Native é feita de forma semelhante ao CSS, porém utilizando objetos JavaScript.

Usamos a função \`StyleSheet.create()\` para organizar os estilos e aplicamos nos componentes através da propriedade \`style\`.

É possível definir propriedades como cor, tamanho de fonte, alinhamento e margens, tornando seu app visualmente agradável e responsivo.`,
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
