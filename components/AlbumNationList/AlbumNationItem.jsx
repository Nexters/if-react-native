import React from 'react';
import styled from '@emotion/native';

import { palette } from '../../style/palette';
import { FontText } from '../common';

function AlbumNationItem({name, foods}) {
  return (
    <Wrapper>
      <Thumbnail />
      <TextWrapper>
        <NationName>{name}</NationName>
        <NationFoods>{foods}</NationFoods>
      </TextWrapper>
    </Wrapper>
  )
}

export default AlbumNationItem;

const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
`;

const Thumbnail = styled.Image`
  width: 48px;
  height: 48px;
  margin-right: 12px;
  background-color: ${palette.lightgray}; 
`

const TextWrapper = styled.View``;

const NationName = styled(FontText)`
  font-size: 17px;
  font-weight: bold;
  color: ${palette.darkbrown};
`;

const NationFoods = styled(FontText)`
  font-size: 12px;
  margin-top: 3px;
  color: ${palette.darkgray};
`;
