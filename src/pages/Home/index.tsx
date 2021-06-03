import React, { useState } from 'react';
import { TouchableWithoutFeedback, ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform, Modal } from 'react-native';
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
import ModalLink from '../../components/ModalLink';
import api from '../../services/api';

// interface DataProps {
//   link: string;
// }

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState('');
  const [URL, setURL] = useState('');

  async function handleShortLink() {
    setLoading(true);

    try {
      const response = await api.post('/shorten', {
        long_url: input
      })
      console.log(response.data)
      setData(response.data.link);
      setURL(response.data.long_url)
      setModalVisible(true);

      Keyboard.dismiss();
      setLoading(false);
      setInput('');

    } catch (error) {
      alert('Ops, algo de errado nã oestá certo.')
      Keyboard.dismiss();
      setInput('');
      setLoading(false);
    }
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
              {loading ? (
                <ActivityIndicator color="#121212" size={24} />
              ) : (
                <ButtonLinkText>Gerar Link</ButtonLinkText>
              )}
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} link={data} URL={URL} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}
