import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  ContainerButton,
  Item,
} from './styles';

export interface ListItemProps {
  link: string
}
interface Props {
  data: ListItemProps
}

export function ListItem({ data }: Props) {

  return (
    <View>
      <ContainerButton activeOpacity={0.9} onPress={() => { }}>
        <Feather name="link" color="#fff" size={22} />
        <Item numberOfLines={1}>{data.link}</Item>
      </ContainerButton>
    </View>
  )
}
