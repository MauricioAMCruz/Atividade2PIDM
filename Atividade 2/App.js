import React from 'react';
import { StyleSheet, View } from 'react-native';

import Cabecalho from './components/Cabecalho'
import Corpo from './components/Corpo'
import Disciplina from './components/Disciplina'

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho 
        nome='Maurício Antônio Martins Cruz'
        curso='Design Digital'
      />
      <Corpo
        
      />
      <Disciplina
        disciplina='Concepção e Desenvolvimento de Produtos'
      />
      <Disciplina
        disciplina='Design e Inovação'
      />
      <Disciplina
        disciplina='Gestão da Informação e Conhecimento'
      />
      <Disciplina
        disciplina='Marketing'
      />
      <Disciplina
        disciplina='Projeto de Interface para Dispositivos Móveis'
      />
      <Disciplina
        disciplina='Projeto Integrado IV'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
