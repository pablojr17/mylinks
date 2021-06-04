import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

import { ListItem } from '../../components/ListItem';
import { useIsFocused } from '@react-navigation/core';
import { getLinksSave, deleteLink } from '../../utils/storeLinks';
import ModalLink from '../../components/ModalLink';

import {
  Title,
  ListLinks,
  ContainerEmpty,
  WarningText
} from './styles';

export interface ListItemProps {
  id: string,
  link: string,
  url: string
}

export default function MyLinks() {
  const isFocused = useIsFocused();

  const [links, setLinks] = useState([])
  const [data, setData] = useState({} || null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('links');
      setLinks(result);
      setLoading(false)
    }

    getLinks()
  }, [isFocused]);

  function handleItem(item: ListItemProps) {
    console.log(item)
    setData(item);
    setModalVisible(true)
  }

  async function handleDelete(id: string) {
    const result = await deleteLink(links, id);
    setLinks(result)
  }

  return (
    <LinearGradient
      colors={['#03001e', '#7303c0', '#fdeff9']}
      style={{ flex: 1 }}
    >

      <StatusBarPage barStyle="light-content" backgroundColor="#03001e" />

      <Menu />
      <Title>Meus links</Title>

      {loading && (
        <ContainerEmpty>
          <ActivityIndicator color="#fff" size={25} />
        </ContainerEmpty>
      )}

      {!loading && links.length === 0 && (
        <ContainerEmpty>
          <WarningText>Você ainda não possui nenhum link :(</WarningText>
        </ContainerEmpty>
      )}

      <ListLinks
        data={links}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} />}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalLink onClose={() => setModalVisible(false)} data={data} />
      </Modal>
    </LinearGradient>
  )
}
