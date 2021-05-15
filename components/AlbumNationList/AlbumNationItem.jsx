import React from 'react';
import styled from '@emotion/native';
import { SvgUri } from 'react-native-svg';

import { palette } from '../../style/palette';
import { FontText } from '../common';

function AlbumNationItem({name, foods, albumImageUrl}) {
  return (
    <Wrapper>
      <Thumbnail
        width={'48px'}
        height={'48px'}
        uri={albumImageUrl}
      />
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

const Thumbnail = styled(SvgUri)`
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
