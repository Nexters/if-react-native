import React from 'react';
import SearchCountry from '../components/SearchCountry';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import Header, { IconItem } from '../components/Header';
import styled from '@emotion/native';
import { FontText } from '../components/common';
import { palette } from '../style/palette';
import { useNavigation } from '@react-navigation/native';

const SearchCountryScreen = () => {
  const navigation = useNavigation();
  const navigateToPreviousScreen = () => navigation.goBack();
  return (
    <SafeAreaViewLayout includeFlex={true}>
      <Header>
        <IconItem iconName="bigCancel" pressFunction={navigateToPreviousScreen} />
        <HeaderText>여행한 나라 찾기</HeaderText>
        <HeaderText></HeaderText>
      </Header>
      <SearchCountry />
    </SafeAreaViewLayout>
  );
};

export default SearchCountryScreen;

const HeaderText = styled(FontText)`
  font-size: 18px;
  color: ${palette.darkbrown};
`
