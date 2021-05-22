import React from 'react';
import styled from '@emotion/native';
import { SvgUri } from 'react-native-svg';

import { FontText } from '../common';
import { palette } from '../../style/palette';

const SearchCountryItem = ({imageUri, name}) => {
  return (
    <CountryItemWrapper>
      <CountryFlagImage
        uri={imageUri}
      />
      <CountryName>{name}</CountryName>
    </CountryItemWrapper>
  );
};

export default SearchCountryItem;

const CountryItemWrapper = styled.View`
  flex-direction: row;
  
  & + & {
    margin-bottom: 32px;
  }
`;

const CountryFlagImage = styled(SvgUri)`
  background-color: ${palette.darkgray};
  width: 36px;
  height: 24px;
`;

const CountryName = styled(FontText)`
  font-size: 16px;
  margin-left: 12px;
`;
