import React from 'react';
import { ButtonMenu } from './styles';
import { Feather } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <ButtonMenu onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Feather name="menu" color="#fff" size={40} />
    </ButtonMenu>
  )
}
