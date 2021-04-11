import React from 'react';
import styled from '@emotion/native';

import { palette } from '../../style/palette';

const AlbumListItem = ({name, count, index}) => {
  return (
    <Wrapper
      index={index}
    >
      <Image />
      <TextWrapper>
        <AlbumText
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {name}
        </AlbumText>
        <AlbumText marginLeft={'8px'}>
          {count}
        </AlbumText>
      </TextWrapper>
    </Wrapper>
  )
};

export default AlbumListItem;

const Wrapper = styled.View`
  margin-bottom: 24px;
  width: 140px;
`;

const Image = styled.Image`
  width: 120px;
  height: 120px;
  background-color: ${palette.lightgray};
`;

const TextWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

const AlbumText = styled.Text`
  font-size: 18px;
  line-height: 20px;
  color: ${palette.darkbrown};
  max-width: 90px;
  margin-left: ${(props) => props.marginLeft || '0'} 
`;
