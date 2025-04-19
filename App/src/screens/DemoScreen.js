import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DemoScreen() {
  const [mensagem, setMensagem] = useState('Olá!');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{mensagem}</Text>
      <Button title="Mudar Mensagem" onPress={() => setMensagem('Você clicou no botão!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
