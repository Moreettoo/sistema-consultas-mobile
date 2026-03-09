import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>2CCR</Text>
      <Text style={styles.subtitulo}>Curso de React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff1df',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#056b138d',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitulo: {
    color: '#025f1e',
    fontSize: 16
  }
});
