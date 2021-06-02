import React from 'react';
import { Text, View } from 'react-native';


export interface ListItemProps {
  link: string
}
interface Props {
  data: ListItemProps
}

export function ListItem({ data }: Props) {

  return (
    <View>
      <Text>{data.link}</Text>
    </View>
  )
}
