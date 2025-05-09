import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App Zodíaco</Text>
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Data de aniversário</Text>
          <TextInput style={styles.input} placeholder='Digite seu aniversário' keyboardType='numeric'/>
          <TouchableOpacity style={styles.botao}>
            <Text style={{ color: "#FFF", fontSize: 18 }}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Nome</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "dodgerblue"
  },
  titulo: {
    margin: 5,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
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
    backgroundColor: "#292929",
    marginTop: 10
  }
});
