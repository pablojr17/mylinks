import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { Container } from './styles';

export default function Home() {
  return (
    <LinearGradient
      // colors={['#005AA7', '#FFFDE4']}
      // colors={['#0f0c29', '#302b63', '#24243e']}
      colors={['#03001e', '#7303c0', '#fdeff9']}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <Text>Home</Text>
    </LinearGradient>
  )
}
