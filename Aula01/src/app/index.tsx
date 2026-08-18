import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [verSaldo, setVerSaldo] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#820AD1" />
      
      {}
      <View style={styles.header}>
        <Text style={styles.user}>Olá, Usuário</Text>
        <TouchableOpacity onPress={() => setVerSaldo(!verSaldo)}>
          <Text style={styles.eye}>{verSaldo ? "Ocultar" : "Mostrar"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {}
        <View style={styles.caixa}>
          <Text style={styles.title}>Conta</Text>
          <Text style={styles.dinheiro}>{verSaldo ? "R$ 1.250,00" : "••••••"}</Text>
        </View>

        {}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menu}>
          <View style={styles.button}><Text style={styles.buttonText}>Pix</Text></View>
          <View style={styles.button}><Text style={styles.buttonText}>Pagar</Text></View>
          <View style={styles.button}><Text style={styles.buttonText}>Transferir</Text></View>
          <View style={styles.button}><Text style={styles.buttonText}>Recarga</Text></View>
        </ScrollView>

        {}
        <View style={styles.caixa}>
          <Text style={styles.titulo}>Cartão de Crédito</Text>
          <Text style={styles.sub}>Fatura atual</Text>
          <Text style={styles.dinheiro}>R$ 350,00</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { backgroundColor: '#820AD1',
  padding: 25,
  paddingTop: 60,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center' 
},

  user: { color: '#ffffff',
     fontSize: 18,
      fontWeight: 'bold' 
},
  eye: { color: '#FFF',
     fontSize: 14 
},
  caixa: { padding: 20,
  borderBottomWidth: 1,
  borderBottomColor: '#EEE' 
},
  titulo: { fontSize: 16,
     fontWeight: 'bold',
      color: '#333',
       marginBottom: 5 
},
  dinheiro: { fontSize: 22,
  fontWeight: 'bold',
  color: '#000' 
},
  sub: { fontSize: 14,
  color: '#666' 
},
  menu: { paddingVertical: 20,
  paddingHorizontal: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#EEE' 
},
  button: { backgroundColor: '#F0F0F0',
  width: 80,
  height: 80,
  borderRadius: 40,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10 
},
  buttonText: { fontWeight: 'bold',
     color: '#333' 
}
});