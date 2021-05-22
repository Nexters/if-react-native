import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import SearchInput from './SearchInput';
import SearchCountryList from './SearchCountryList';
import EmptyCountryFallback from './EmptyCountryFallback';
import { useQuery } from 'react-query';
import { searchCountries } from '../../lib/api/country';

const SearchCountry = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [countryName] = useDebounce(searchKeyword, 300);

  const [prevData, setPrevData] = useState(null);

  const {
    isLoading,
    error,
    data
  } = useQuery(
    ['searchCountries', countryName],
    searchCountries,
    {
      enabled: true
    }
  );

  useEffect(() => {
    if (data) {
      setPrevData(data);
    }
  }, [data]);

  const visibleData = data || prevData;
  if (!visibleData) return null;

  return (
    <View>
      <SearchInput
        searchKeyword={searchKeyword}
        onChangeSearchKeyword={setSearchKeyword}
      />
      {
        visibleData && visibleData.length > 0 ?
          <SearchCountryList /> : null
      }
      {
        visibleData && visibleData.length === 0 ?
          <EmptyCountryFallback
            searchKeyword={searchKeyword}
          /> : null
      }

    </View>
  );
};

export default SearchCountry;
