import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import { Feather } from '@expo/vector-icons';

import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText
} from './styles';

import Menu from '../../components/Menu';

export default function Home() {
  const [input, setInput] = useState('');

  function handleShortLink() {
    console.log(input)
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={['#03001e', '#7303c0', '#fdeff9']}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <StatusBarPage barStyle="light-content" backgroundColor="#03001e" />
        <Menu />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >


          <ContainerLogo>
            <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
          </ContainerLogo>

          <ContainerContent>
            <Title>ShortenLink</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>
          </ContainerContent>
        </KeyboardAvoidingView>

        <ContainerInput>
          <BoxIcon>
            <Feather name="link" size={22} color="#fff" />
          </BoxIcon>
          <Input
            placeholder="Cole seu link aqui"
            placeholderTextColor="#FFF"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="url"
            value={input}
            onChangeText={(text) => setInput(text)}
          />
        </ContainerInput>

        <ButtonLink onPress={handleShortLink}>
          <ButtonLinkText>Gerar Link</ButtonLinkText>
        </ButtonLink>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}
