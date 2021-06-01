import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';

export default function MyLinnks() {
  return (
    <LinearGradient
      colors={['#03001e', '#7303c0', '#fdeff9']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >

      <StatusBarPage barStyle="light-content" backgroundColor="#03001e" />

      <Text style={{ fontSize: 46, color: "#fff" }}>Meus links</Text>
    </LinearGradient>
  )
}
