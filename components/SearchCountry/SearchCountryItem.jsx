import React from 'react';
import styled from '@emotion/native';
import { FontText } from '../common';
import { palette } from '../../style/palette';

const SearchCountryItem = ({uri, name}) => {
  return (
    <CountryItemWrapper>
      <CountryFlagImage
        source={{uri}}
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

const CountryFlagImage = styled.Image`
  background-color: ${palette.darkgray};
  width: 36px;
  height: 24px;
`;

const CountryName = styled(FontText)`
  font-size: 16px;
  margin-left: 12px;
`;
