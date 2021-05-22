import React, { useMemo } from 'react';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import AlbumFeedList from '../components/AlbumFeedList';
import { useQuery } from 'react-query';
import { getCountryFeeds } from '../lib/api/country';
import Header, { IconItem } from '../components/Header';
import styled from '@emotion/native';
import { palette } from '../style/palette';
import { FontText } from '../components/common';
import { useNavigation } from '@react-navigation/native';

const AlbumFeedScreen = ({route}) => {
  const navigation = useNavigation();
  const navigateToAlbum = () => navigation.navigate('Album');

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
      <Header>
        <IconItem iconName="arrow" pressFunction={navigateToAlbum} />
        <HeaderText>오스트레일리아</HeaderText>
        <HeaderText>12</HeaderText>
      </Header>
      <AlbumFeedList />
    </SafeAreaViewLayout>
  );
};

export default AlbumFeedScreen;

const HeaderText = styled(FontText)`
  font-size: 18px;
  color: ${palette.darkbrown};
`
