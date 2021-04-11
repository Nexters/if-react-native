import React from 'react';
import styled from '@emotion/native';
import AlbumListItem from './AlbumListItem';
import { Pressable } from 'react-native';
import { palette } from '../../style/palette';

const initialData = [{
  id: 1,
  imageUrl: '',
  name: '남아프리카공화국',
  count: 123
}, {
  id: 2,
  imageUrl: '',
  name: '일본',
  count: 123
}, {
  id: 3,
  imageUrl: '',
  name: '중국',
  count: 123
}, {
  id: 4,
  imageUrl: '',
  name: '독일',
  count: 123
}]

const overflowData = [{
  id: 5,
  imageUrl: '',
  name: '대한민국',
  count: 123
}, {
  id: 6,
  imageUrl: '',
  name: '베트남',
  count: 123
}]

function AlbumList() {
  return (
    <ListWrapper horizontal={true}>
      <InitialList>
        {
          initialData.map((data, index) => (
            <Pressable onPress={() => {console.log(data.id)}}>
              <AlbumListItem
                key={data.id}
                name={data.name}
                count={data.count}
                index={index}
              />
            </Pressable>
          ))
        }
      </InitialList>
      <OverflowList>
        {
          overflowData.map((data, index) => (
            <Pressable onPress={() => {console.log(data.id)}}>
              <AlbumListItem
                key={data.id}
                name={data.name}
                count={data.count}
                index={index}
              />
            </Pressable>
          ))
        }
      </OverflowList>
    </ListWrapper>
  )
}

export default AlbumList;

const ListWrapper = styled.ScrollView`
  display: flex;
  flex-direction: row;
  border-bottom-color: ${palette.lightgray};
  border-bottom-width: 1px;
`;

const InitialList = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 280px;
  max-height: 361px;
`;

const OverflowList = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 361px;
`;
