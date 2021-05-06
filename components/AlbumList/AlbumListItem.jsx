import React, { useCallback } from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { palette } from '../../style/palette';
import { FontText } from '../common';

const AlbumListItem = ({name, count, albumImageUrl, index}) => {
  const navigation = useNavigation()
  const onPressAlbum = useCallback(() => {
    navigation.navigate('AlbumFeed')
  }, [navigation])

  return (
    <Pressable onPress={onPressAlbum}>
      <Wrapper
        index={index}
      >
        <Thumbnail
          width={'120px'}
          height={'120px'}
          uri={albumImageUrl}
        />
        <TextWrapper>
          <AlbumText
            numberOfLines={1}
            ellipsizeMode={'tail'}
          >
            {name}
          </AlbumText>
          <AlbumText
            marginLeft={'8px'}
            fontSize={'14px'}
          >
            {count}
          </AlbumText>
        </TextWrapper>
      </Wrapper>
    </Pressable>
  )
};

export default AlbumListItem;

const Wrapper = styled.View`
  margin-bottom: 24px;
  width: 140px;
`;

const Thumbnail = styled(SvgUri)`
  background-color: ${palette.lightgray};
`;

const TextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

const AlbumText = styled(FontText)`
  font-size: ${(props) => props.fontSize || '17px'};
  color: ${palette.darkbrown};
  max-width: 90px;
  margin-left: ${(props) => props.marginLeft || '0'} 
`;
