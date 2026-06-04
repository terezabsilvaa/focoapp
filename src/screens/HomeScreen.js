import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeText}>Olá, Estudante!</Text>
        <Text style={styles.motivation}>"O sucesso é a soma de pequenos esforços repetidos dia após dia."</Text>
      </View>

      <Text style={styles.sectionTitle}>Avisos Importantes</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📅 Simulado Geral</Text>
        <Text style={styles.cardBody}>Não se esqueça: O simulado de Matemática será liberado nesta sexta-feira às 14h.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>💡 Dica de Ouro</Text>
        <Text style={styles.cardBody}>Utilize a técnica Pomodoro para estudar blocos de 25 minutos com 5 de descanso.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 15 },
  welcomeBox: { backgroundColor: '#4A90E2', padding: 20, borderRadius: 12, marginBottom: 20 },
  welcomeText: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  motivation: { color: '#E0EEFF', fontSize: 14, marginTop: 5, fontStyle: 'italic' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  card: { backgroundColor: '#FFF', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#EAEAEA' },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#4A90E2', marginBottom: 5 },
  cardBody: { fontSize: 14, color: '#555', lineHeight: 20 }
});