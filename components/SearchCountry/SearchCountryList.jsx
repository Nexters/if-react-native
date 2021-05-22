import React from 'react';
import styled from '@emotion/native';
import { Pressable } from 'react-native';

import SearchCountryItem from './SearchCountryItem';

const SearchCountryList = ({countryData}) => {
  const renderSearchCountryItem = ({item}) => (
    <Pressable onPress={() => {console.log(item.id)}}>
      <SearchCountryItem
        imageUri={item.flagImageUrl}
        name={item.name}
      />
    </Pressable>
  )

  return (
    <CountryListWrapper
      data={countryData}
      renderItem={renderSearchCountryItem}
      keyExtractor={item => item.id}
    />
  );
};

export default SearchCountryList;

const CountryListWrapper = styled.FlatList`
  margin-top: 44px;
`;
