export const exercises = [
    {
      id: '1',
      title: 'Exercício 1: useState básico',
      description: 'Complete o código para que ele funcione como um contador.',
      description_detail: '',
      code: `import React from 'react';\nimport { View, Text, Button } from 'react-native';\n\nexport default function App() {\n  const [count, setCount] = // ???\n\n  return (\n    <View>\n      <Text>{count}</Text>\n      <Button title=\"Incrementar\" onPress={() => setCount(count + 1)} />\n    </View>\n  );\n}`,
      answer: `useState(0)`
    },
    {
      id: '2',
      title: 'Exercício 2: Exibir mensagem',
      description: 'Complete o código para mostrar uma mensagem ao clicar no botão.',
      description_detail: '',
      code: `import React, { useState } from 'react';\nimport { View, Text, Button } from 'react-native';\n\nexport default function App() {\n  const [message, setMessage] = useState(\"\");\n\n  return (\n    <View>\n      <Button title=\"Mostrar\" onPress={() => // ???} />\n      <Text>{message}</Text>\n    </View>\n  );\n}`,
      answer: `setMessage("Olá mundo!")`
    },
    {
      id: '3',
      title: 'Exercício 3: Estilizar texto',
      description: 'Complete o estilo para mudar a cor do texto.',
      description_detail: '',
      code: `import React from 'react';\nimport { Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return <Text style={styles.text}>Texto colorido</Text>;\n}\n\nconst styles = StyleSheet.create({\n  text: {\n    // ???\n  }\n});` ,
      answer: `color: 'blue'`
    }
  ];
  