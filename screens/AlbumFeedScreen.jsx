import React, { useMemo } from 'react';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import AlbumFeedList from '../components/AlbumFeedList';
import { useQuery } from 'react-query';
import { getCountryFeeds } from '../lib/api/country';

const AlbumFeedScreen = ({route}) => {
  const countryType = useMemo(() => {
      return route.params.countryType;
  }, [route]);

  console.log('countryType', countryType);

  const {
    isLoading,
    error,
    data
  } = useQuery(['getCountryFeeds', countryType], getCountryFeeds);

  console.log('data', data);

  return (
    <SafeAreaViewLayout includeFlex={true}>
      <AlbumFeedList />
    </SafeAreaViewLayout>
  );
};

export default AlbumFeedScreen;
