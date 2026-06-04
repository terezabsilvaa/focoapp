import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function StatsScreen() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const enviarOcorrencia = () => {
    if (!titulo || !descricao) {
      Alert.alert('Erro', 'Por favor, descreva o problema ou dúvida.');
      return;
    }
    Alert.alert('Enviado com Sucesso', 'Sua dúvida/ocorrência foi enviada aos tutores.');
    setTitulo('');
    setDescricao('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reportar Problema ou Dúvida Acadêmica</Text>
      <Text style={styles.label}>Título do Caso:</Text>
      <TextInput style={styles.input} placeholder="Ex: Link do material quebrado" value={titulo} onChangeText={setTitulo} />
      
      <Text style={styles.label}>Descrição Detalhada:</Text>
      <TextInput 
        style={[styles.input, styles.textArea]} 
        placeholder="Descreva o que aconteceu..." 
        multiline 
        numberOfLines={4}
        value={descricao}
        onChangeText={setDescricao}
      />

      <TouchableOpacity style={styles.photoButton} onPress={() => Alert.alert('Câmera', 'Funcionalidade de foto integrada.')}>
        <Text style={styles.photoText}>📸 Adicionar Print/Foto (Opcional)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sendButton} onPress={enviarOcorrencia}>
        <Text style={styles.sendButtonText}>Enviar para Suporte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20, color: '#333', textAlign: 'center' },
  label: { fontSize: 14, fontWeight: 'bold', color: '#555', marginBottom: 5 },
  input: { backgroundColor: '#FFF', borderRadius: 8, paddingHorizontal: 12, height: 45, marginBottom: 15, borderWidth: 1, borderColor: '#DDD' },
  textArea: { height: 100, paddingTop: 10, textAlignVertical: 'top' },
  photoButton: { borderStyle: 'dashed', borderWidth: 1.5, borderColor: '#999', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  photoText: { color: '#555' },
  sendButton: { backgroundColor: '#E74C3C', height: 45, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  sendButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});