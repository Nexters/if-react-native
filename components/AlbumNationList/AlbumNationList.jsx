import React from 'react';
import AlbumNationItem from './AlbumNationItem';
import { FlatList, Pressable } from 'react-native';
import styled from '@emotion/native';
import { palette } from '../../style/palette';

const data = [{
  id: 1,
  imageUrl: '',
  name: '대만',
  foods: '망고빙수, 밀크티, 지파이, 펑리수'
}, {
  id: 2,
  imageUrl: '',
  name: '대만',
  foods: '망고빙수, 밀크티, 지파이, 펑리수'
}, {
  id: 3,
  imageUrl: '',
  name: '대만',
  foods: '망고빙수, 밀크티, 지파이, 펑리수'
}, {
  id: 4,
  imageUrl: '',
  name: '대만',
  foods: '망고빙수, 밀크티, 지파이, 펑리수'
}]

function AlbumNationList({listTitle}) {
  const renderAlbumNationItem = ({item}) => (
    <Pressable onPress={() => {console.log(item.id)}}>
      <AlbumNationItem
        name={item.name}
        foods={item.foods}
      />
    </Pressable>
  )

  return (
    <>
      {
        listTitle &&
        <ListTitle>{listTitle}</ListTitle>
      }
      <FlatList
        data={data}
        renderItem={renderAlbumNationItem}
        keyExtractor={item => item.id}
      />
    </>
  )
}

export default AlbumNationList;

const ListTitle = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${palette.darkbrown};
  margin-top: 24px;
  margin-bottom: 32px;
`;
