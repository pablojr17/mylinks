import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';

import {
  ContainerButton,
  Item,
  ActionContainer
} from './styles';

export interface ListItemProps {
  id: string,
  link: string,
  url: string
}

interface Props {
  data: ListItemProps,
  selectedItem: (data: ListItemProps) => void;
  deleteItem: (id: string) => void
}

export function ListItem({ data, selectedItem, deleteItem }: Props) {

  function RightActions() {
    return (
      <ActionContainer onPress={() => deleteItem(data.id)}>
        <Feather
          name="trash"
          color="#fff"
          size={24}
        />
      </ActionContainer>
    )
  }

  return (
    <View>
      <Swipeable renderRightActions={RightActions}>
        <ContainerButton activeOpacity={0.9} onPress={() => selectedItem(data)}>
          <Feather name="link" color="#fff" size={22} />
          <Item numberOfLines={1}>{data.url}</Item>
        </ContainerButton>
      </Swipeable>
    </View>
  )
}
