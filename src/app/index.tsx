import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [mensaje, setMensaje] = useState('¡Pulsa el boton!');

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Mi primer boton</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>

      <Pressable
        style={styles.boton}
        onPress={() => setMensaje('¡Pulsaste bien pa!')}
      >
        <Text style={styles.textoBoton}>¡Haz clic!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#eef4ff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#173b75',
    marginBottom: 18,
  },
  mensaje: {
    fontSize: 17,
    marginBottom: 22,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#16a34a', // Color cambiado a verde
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
