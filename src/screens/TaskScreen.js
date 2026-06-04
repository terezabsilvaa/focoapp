import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

export default function TaskScreen() {
  const [materia, setMateria] = useState('');
  const [data, setData] = useState('');
  const [ciclos, setCiclos] = useState([
    { id: '1', materia: 'História Geral', data: '25/05 - 14:00', status: 'Confirmado' },
    { id: '2', materia: 'Cálculo I', data: '26/05 - 16:00', status: 'Confirmado' }
  ]);

  const handleAgendar = () => {
    if (!materia || !data) {
      Alert.alert('Erro', 'Preencha a matéria e o horário programado.');
      return;
    }
    // Validação básica de conflito de horários (Regra de Negócio)
    const conflito = ciclos.some(item => item.data === data);
    if (conflito) {
      Alert.alert('Erro', 'Você já possui um ciclo de estudos agendado para este horário!');
      return;
    }

    const novoCiclo = { id: Date.now().toString(), materia, data, status: 'Pendente' };
    setCiclos([...ciclos, novoCiclo]);
    setMateria('');
    setData('');
    Alert.alert('Sucesso', 'Ciclo agendado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Ciclo de Estudo</Text>
      <TextInput style={styles.input} placeholder="Matéria (Ex: Física)" value={materia} onChangeText={setMateria} />
      <TextInput style={styles.input} placeholder="Data e Hora (Ex: 28/05 - 15:00)" value={data} onChangeText={setData} />
      <TouchableOpacity style={styles.button} onPress={handleAgendar}>
        <Text style={styles.buttonText}>Reservar Horário</Text>
      </TouchableOpacity>

      <Text style={styles.subTitle}>Meus Agendamentos</Text>
      <FlatList 
        data={ciclos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemMateria}>{item.materia}</Text>
            <Text style={styles.itemData}>{item.data} - <Text style={{fontWeight: 'bold'}}>{item.status}</Text></Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  input: { backgroundColor: '#FFF', height: 45, borderRadius: 8, paddingHorizontal: 12, marginBottom: 12, borderWidth: 1, borderColor: '#DDD' },
  button: { backgroundColor: '#2ECC71', height: 45, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 25 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  subTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  itemCard: { backgroundColor: '#FFF', padding: 15, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#EAEAEA' },
  itemMateria: { fontSize: 16, fontWeight: 'bold', color: '#4A90E2' },
  itemData: { fontSize: 14, color: '#666', marginTop: 3 }
});