import React from 'react';
import SearchCountry from '../components/SearchCountry';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';

const SearchCountryScreen = () => {
  return (
    <SafeAreaViewLayout includeFlex={true}>
      <SearchCountry />
    </SafeAreaViewLayout>
  );
};

export default SearchCountryScreen;
