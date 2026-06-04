import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function AdminScreen() {
  const [solicitacoes, setSolicitacoes] = useState([
    { id: '1', aluno: 'Carlos Silva', materia: 'Revisão Enem', data: '28/05 - 15:00' },
    { id: '2', aluno: 'Ana Costa', materia: 'Plantão Química', data: '29/05 - 10:00' }
  ]);

  const gerenciarSolicitacao = (id, acao) => {
    Alert.alert('Sucesso', `Agendamento ${acao === 'aprovar' ? 'Aprovado' : 'Recusado'} com sucesso!`);
    setSolicitacoes(solicitacoes.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel do Orientador</Text>
      <Text style={styles.subtitle}>Aprovação de Ciclos de Estudo Solicitados</Text>

      <FlatList 
        data={solicitacoes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.requestCard}>
            <Text style={styles.studentName}>Estudante: {item.aluno}</Text>
            <Text style={styles.details}>{item.materia} | {item.data}</Text>
            
            <View style={styles.buttonRow}>
              <TouchableOpacity style={[styles.actionButton, styles.approveBtn]} onPress={() => gerenciarSolicitacao(item.id, 'aprovar')}>
                <Text style={styles.btnText}>Aprovar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.rejectBtn]} onPress={() => gerenciarSolicitacao(item.id, 'recusar')}>
                <Text style={styles.btnText}>Recusar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  requestCard: { backgroundColor: '#FFF', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#EAEAEA' },
  studentName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  details: { fontSize: 14, color: '#666', marginVertical: 5 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  actionButton: { flex: 1, height: 35, borderRadius: 6, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 },
  approveBtn: { backgroundColor: '#2ECC71' },
  rejectBtn: { backgroundColor: '#E74C3C' },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 }
});