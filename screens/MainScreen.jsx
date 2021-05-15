import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { Story } from '../components';
import Header, { IconItem } from '../components/Header';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import { Svg } from '../assets';
import { getStories } from '../lib/api/story';

function MainScreen(props) {
  const navigation = useNavigation();

  const navigateToAlbum = () => navigation.navigate('Album');
  const navigateToMyPage = () => navigation.navigate('MyPage');
  const onPressPlusIcon = () => navigation.navigate('AddStory');

  const { isFetched, data } = useQuery('getStories', getStories);

  return (
    <SafeAreaViewLayout includeFlex={true}>
      <Header>
        <IconItem iconName="album" pressFunction={navigateToAlbum} />
        <IconItem iconName="mypage" pressFunction={navigateToMyPage} />
      </Header>
      {isFetched &&
        (data.length === 0 ? (
          <Story />
        ) : (
          data.map(({ id, ...props }) => <Story key={id} {...props} />)
        ))}
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
