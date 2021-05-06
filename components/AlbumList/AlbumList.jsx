import React, { useMemo } from 'react';
import styled from '@emotion/native';
import AlbumListItem from './AlbumListItem';
import { Pressable } from 'react-native';
import { palette } from '../../style/palette';

function AlbumList({data}) {
  const initialData = useMemo(() => {
    if (data.length === 0) return [];
    return data.slice(0, 4);
  }, [data]);

  const overflowData = useMemo(() => {
    if (data.length <= 4) return [];
    return data.slice(4, data.length);
  }, [data]);

  return (
    <ListWrapper horizontal={true}>
      <InitialList>
        {
          initialData.map((data, index) => (
            <Pressable onPress={() => {console.log(data.id)}}>
              <AlbumListItem
                key={data.id}
                name={data.name}
                count={data.numberOfStories}
                albumImageUrl={data.albumStickerImageUrl}
                index={index}
              />
            </Pressable>
          ))
        }
      </InitialList>
      {
        overflowData.length > 0 ?
          <OverflowList>
            {
              overflowData.map((data, index) => (
                <Pressable onPress={() => {console.log(data.id)}}>
                  <AlbumListItem
                    key={data.id}
                    name={data.name}
                    count={data.numberOfStories}
                    albumImageUrl={data.albumStickerImageUrl}
                    index={index}
                  />
                </Pressable>
              ))
            }
          </OverflowList> : null
      }
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
  max-height: 370px;
`;
