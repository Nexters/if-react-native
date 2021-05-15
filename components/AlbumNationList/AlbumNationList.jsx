import React from 'react';
import AlbumNationItem from './AlbumNationItem';
import { FlatList, Pressable } from 'react-native';
import styled from '@emotion/native';
import { palette } from '../../style/palette';
import { FontText } from '../common';

function AlbumNationList({listTitle, data}) {
  const renderAlbumNationItem = ({item}) => (
    <Pressable onPress={() => {console.log(item.id)}}>
      <AlbumNationItem
        name={item.name}
        foods={item.mainFoods}
        albumImageUrl={item.albumStickerImageUrl}
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

const ListTitle = styled(FontText)`
  font-size: 17px;
  line-height: 20px;
  color: ${palette.darkbrown};
  margin-top: 24px;
  margin-bottom: 32px;
`;
