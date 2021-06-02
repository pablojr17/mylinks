import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

import {
  Title,
  ListLinks

} from './styles';
import { ListItem, ListItemProps } from '../../components/ListItem';

export interface DataListProps extends ListItemProps {
  id: string;
}

export default function MyLinks() {
  const data: DataListProps[] = [
    {
      id: '1',
      link: 'https://stackoverflow.com/questions/60663805/couldnt-find-a-component-or-children-prop-for-the-screen-home-this-can-h'
    },
    {
      id: '2',
      link: 'https://stackoverflow.com/questions/64621739/react-native-android-couldnt-find-a-component-getcomponent-or-children'
    }
  ]
  return (
    <LinearGradient
      colors={['#03001e', '#7303c0', '#fdeff9']}
      style={{ flex: 1 }}
    >

      <StatusBarPage barStyle="light-content" backgroundColor="#03001e" />

      <Menu />
      <Title>Meus links</Title>
      <ListLinks
        data={data}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={item => String(item.id)}


      />
    </LinearGradient>
  )
}
