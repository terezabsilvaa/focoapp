import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === '' || senha === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    // Simulação de entrada direta para fins acadêmicos
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🎯 FOCO</Text>
      <Text style={styles.subtitle}>Organize seus estudos e atinja suas metas</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Redefinir Senha', 'Link de recuperação enviado para o e-mail.')}>
        <Text style={styles.linkText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F7FA', padding: 20 },
  logo: { fontSize: 42, fontWeight: 'bold', color: '#4A90E2', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 30, textAlign: 'center' },
  input: { width: '100%', height: 50, backgroundColor: '#FFF', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, borderWidth: 1, borderColor: '#DDD' },
  button: { width: '100%', height: 50, backgroundColor: '#4A90E2', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  linkText: { color: '#4A90E2', marginTop: 20, fontSize: 14 }
});