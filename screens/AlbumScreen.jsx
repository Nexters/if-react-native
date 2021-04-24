import React from 'react';
import styled from '@emotion/native';
import Header, { IconItem } from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';

import AlbumNationList from '../components/AlbumNationList';
import AlbumNationTitle from '../components/AlbumNationList/AlbumNationTitle';
import AlbumList from '../components/AlbumList';

function AlbumScreen() {
  const navigation = useNavigation();

  const navigateToFeed = () => {
    navigation.navigate('Main');
  };

  const navigateToMyPage = () => {
    navigation.navigate('MyPage');
  };

  return (
    <SafeAreaViewLayout>
      <ScreenWrapper>
        <Header>
          <IconItem iconName="feed" pressFunction={navigateToFeed} />
          <IconItem iconName="mypage" pressFunction={navigateToMyPage} />
        </Header>
        {/*<>*/}
        {/*  <AlbumNationTitle>*/}
        {/*    오늘 식사시간에는{'\n'}*/}
        {/*    어떤 나라의 음식을 드셨나요?*/}
        {/*  </AlbumNationTitle>*/}
        {/*  <AlbumNationList />*/}
        {/*</>*/}
        <>
          <AlbumNationTitle>{`기록한 나라 6`}</AlbumNationTitle>
          <AlbumList />
          <AlbumNationList listTitle={'새로운 나라도 기록해보세요!'} />
        </>
      </ScreenWrapper>
    </SafeAreaViewLayout>
  );
}

export default AlbumScreen;

const ScreenWrapper = styled.ScrollView`
  // padding: 0 24px;
`;
