import React from 'react';
import SearchInput from './SearchInput';
import SearchCountryList from './SearchCountryList';
import EmptyCountryFallback from './EmptyCountryFallback';
import styled from '@emotion/native';

const SearchCountry = () => {
  return (
    <SearchCountryWrapper>
      <SearchInput />
      <SearchCountryList />
      {/*<EmptyCountryFallback />*/}
    </SearchCountryWrapper>
  );
};

export default SearchCountry;

const SearchCountryWrapper = styled.View`
  padding-top: 32px;
  padding-right: 24px;
  padding-left: 24px;
`;
