import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
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
  const onPressPlusIcon = () => navigation.navigate('AddStory');

  return (
    <SafeAreaViewLayout includeFlex={true}>
      <Header>
        <IconItem iconName="album" pressFunction={navigateToAlbum} />
        <IconItem iconName="mypage" pressFunction={navigateToMyPage} />
      </Header>
      <Story />
      <TouchableWrapper onPress={onPressPlusIcon}>
        <Svg name="add" />
      </TouchableWrapper>
    </SafeAreaViewLayout>
  );
}

export default MainScreen;

const Layout = styled.View`
  position: relative;
  flex: 1;
  height: 100%;
`;

const TouchableWrapper = styled.TouchableHighlight`
  position: absolute;
  height: 72px;
  bottom: 0;
  right: -24px;
`;
