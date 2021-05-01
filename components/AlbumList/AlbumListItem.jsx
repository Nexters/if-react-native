import React from 'react';
import styled from '@emotion/native';

import { palette } from '../../style/palette';
import { FontText } from '../common';

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
        <AlbumText
          marginLeft={'8px'}
          fontSize={'14px'}
        >
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
