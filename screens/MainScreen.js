import React from 'react';
import styled from '@emotion/native';
import { Story } from '../components';
import Header, { IconItem } from '../components/Header';
import { Svg } from '../assets';
import { useNavigation } from '@react-navigation/native';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';

function MainScreen(props) {
  const navigation = useNavigation();

  const navigateToAlbum = () => {
    navigation.navigate('Album');
  };

  const navigateToMyPage = () => {
    navigation.navigate('MyPage');
  };

  return (
    <SafeAreaViewLayout includeFlex={true}>
      <Header>
        <IconItem iconName="album" pressFunction={navigateToAlbum} />
        <IconItem iconName="mypage" pressFunction={navigateToMyPage} />
      </Header>
      <Story />
      <ButtonWrapper>
        <Svg name="add" />
      </ButtonWrapper>
    </SafeAreaViewLayout>
  );
}

export default MainScreen;

const Layout = styled.View`
  position: relative;
  flex: 1;
  height: 100%;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  height: 72px;
  bottom: 0;
  right: -24px;
`;
