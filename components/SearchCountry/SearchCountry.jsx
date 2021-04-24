import React from 'react';
import { View } from 'react-native';
import SearchInput from './SearchInput';
import SearchCountryList from './SearchCountryList';
import EmptyCountryFallback from './EmptyCountryFallback';

const SearchCountry = () => {
  return (
    <View>
      <SearchInput />
      <SearchCountryList />
      {/*<EmptyCountryFallback />*/}
    </View>
  );
};

export default SearchCountry;
