export const exercises = [
  {
    id: '1',
    lessonId: '1',
    title: '👋 Primeiro Componente',
    description: 'Crie um componente que exiba uma mensagem de boas-vindas.',
    description_detail: 'Use os componentes View e Text para criar a estrutura básica de um aplicativo que diga "Olá, React Native!".',
    code: `// Complete o código abaixo:

import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      {/* ??? */}
    </View>
  );
}`,
    answer: `<Text>Olá, React Native!</Text>`
  },
  {
    id: '2',
    lessonId: '2',
    title: '📝 Entrada de Texto',
    description: 'Crie um campo de entrada com um texto acima.',
    description_detail: 'Use os componentes Text e TextInput para pedir o nome do usuário.',
    code: `import { View, Text, TextInput } from 'react-native';

export default function Entrada() {
  return (
    <View>
      {/* ??? */}
    </View>
  );
}`,
    answer: `<Text>Digite seu nome:</Text>\n<TextInput placeholder="Seu nome aqui" />`
  },
  {
    id: '3',
    lessonId: '3',
    title: '🔢 Contador com useState',
    description: 'Implemente um contador simples com useState.',
    description_detail: 'O contador deve iniciar em 0 e aumentar 1 a cada clique no botão.',
    code: `import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {
  const [contador, setContador] = // ???

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}`,
    answer: `useState(0)`
  },
  {
    id: '4',
    lessonId: '3',
    title: '💬 Mensagem dinâmica com useState',
    description: 'Altere o texto na tela ao clicar no botão.',
    description_detail: 'Crie um estado para armazenar a mensagem e altere seu valor ao clicar no botão.',
    code: `import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Mensagem() {
  const [mensagem, setMensagem] = useState("");

  return (
    <View>
      {/* ??? */}
    </View>
  );
}`,
    answer: `<Button title="Mostrar" onPress={() => setMensagem("Olá mundo!")} />\n<Text>{mensagem}</Text>`
  },
  {
    id: '5',
    lessonId: '4',
    title: '🎨 Estilizando texto',
    description: 'Aplique uma cor ao texto usando StyleSheet.',
    description_detail: 'Complete o estilo para que o texto apareça com a cor roxa e fonte maior.',
    code: `import { View, Text, StyleSheet } from 'react-native';

export default function Estilo() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Texto Estilizado</Text>
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
    // ???
  },
});`,
    answer: `color: 'purple',\nfontSize: 24`
  }
];
