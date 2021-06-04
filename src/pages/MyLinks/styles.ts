import { Platform, FlatList } from 'react-native';
import styled from 'styled-components/native';

import { DataListProps } from '.'

export const Title = styled.Text`
margin-top: ${Platform.OS === 'ios' ? '35' + '%' : '20' + '%'};
  font-size: 33px;
  margin-left: 20px;
  color: #fff;
  font-weight: bold;
`;

export const ListLinks = styled(
  FlatList as new () => FlatList<DataListProps>
).attrs({
  contentContainerStyle: { paddingBottom: 20 },
  showsVerticalScrollIndicator: false
})`

`;