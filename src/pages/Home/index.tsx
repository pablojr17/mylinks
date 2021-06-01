import React from 'react';
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
  return (
    <LinearGradient
      colors={['#03001e', '#7303c0', '#fdeff9']}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <StatusBarPage barStyle="light-content" backgroundColor="#03001e" />
      <Menu />

      <ContainerLogo>
        <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
      </ContainerLogo>

      <ContainerContent>
        <Title>ShortenLink</Title>
        <SubTitle>Cole seu link para encurtar</SubTitle>
      </ContainerContent>

      <ContainerInput>
        <BoxIcon>
          <Feather name="link" size={22} color="#fff" />
        </BoxIcon>
        <Input placeholder="Cole seu link aqui" placeholderTextColor="#FFF" />
      </ContainerInput>

      <ButtonLink>
        <ButtonLinkText>Gerar Link</ButtonLinkText>
      </ButtonLink>
    </LinearGradient>
  )
}
