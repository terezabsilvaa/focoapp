import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importação das telas
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import TaskScreen from './src/screens/TaskScreen';
import StatsScreen from './src/screens/StatsScreen';
import AdminScreen from './src/screens/AdminScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Menu de Navegação Inferior para os Alunos/Professores
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerStyle: { backgroundColor: '#4A90E2' }, headerTintColor: '#fff' }}>
      <Tab.Screen name="Dashboard" component={HomeScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="Cronograma" component={TaskScreen} options={{ title: 'Meus Estudos' }} />
      <Tab.Screen name="Desempenho" component={StatsScreen} options={{ title: 'Estatísticas' }} />
      <Tab.Screen name="Painel Admin" component={AdminScreen} options={{ title: 'Coordenação' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}