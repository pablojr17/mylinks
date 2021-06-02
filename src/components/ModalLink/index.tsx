import React from 'react';
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native';
import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl

} from './styles';
import { Feather } from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';

interface ModalProps {
  onClose: () => void;
}

export default function ModalLink({ onClose }: ModalProps) {
  function copyLink() {
    Clipboard.setString('https://seulink.com.br')
    alert('Link copiado com sucesso!')
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link: https://seulink.com.br`
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('ActivityType')
        } else {
          console.log('Compartilhado')
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Modal fechado')
      }
    } catch (error) {
      console.log('Modal fechado')
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl>https://pablogomes.dev</LongUrl>

          <ShortLinkArea activeOpacity={1} onPress={copyLink} >
            <ShortLinkUrl numberOfLines={1}>
              https://bit.ly/ao2dko
          </ShortLinkUrl>
            <TouchableOpacity onPress={copyLink}>
              <Feather name="copy" color="#fff" size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  )
}
