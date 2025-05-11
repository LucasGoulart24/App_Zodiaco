import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const[aniversario, setAniversario] = useState('');
  const[signo, setSigno] = useState('');

  // Função para descrobir o Signo
  const descobrirSigno = (data) => {
    const partes = data.split('/');
    if(partes.length !== 2) return 'Data Invalida!'

    const dia = parseInt(partes[0]);
    const mes = parseInt(partes[1]);

    if(isNaN(dia) || isNaN(mes)) return 'Data Invalida!'

    // Mês e dia dos signos
    if((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return 'Áries';
    if((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return 'Touro';
    if((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return 'Gêmeos';
    if((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return 'Câncer';
    if((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return 'Leão';
    if((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return 'Virgem';
    if((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return 'Libra';
    if((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return 'Escorpião';
    if((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return 'Sagitário';
    if((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return 'Capricórnio';
    if((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return 'Aquário';
    if((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return 'Peixes';

    return 'Data inválida';
  }

  // Função para adicionar
  const adicionar = () => {
    const resultado = descobrirSigno(aniversario);
    setSigno(resultado);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App Zodíaco</Text>
      <Text style={styles.texto}>Bem-vindo, você quer saber qual é o seu signo?</Text>
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: "#ffa500" }}>Data de aniversário</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Digite seu aniversário (DD/MM)' 
            keyboardType='numeric'
            value={aniversario}
            onChangeText={setAniversario}
          />
          <TouchableOpacity style={styles.botao} onPress={adicionar}>
            <Text style={{ color: "#000", fontSize: 18 }}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.subTitulo}>{signo ? `Signo: ${signo}` : 'Nome'}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#120a8f"
  },
  titulo: {
    margin: 5,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#ffa500"
  },
  texto: {
    margin: 5,
    fontSize: 15,
    color: "#FFF"
  },
  input: {
    width: 350,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#FFF"
  },
  botao: {
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: "#ffa500",
    marginTop: 10
  },
  subTitulo: {
    fontSize: 25, 
    fontWeight: 'bold', 
    textAlign: 'center',
    color: "#ffa500"
  }
});
