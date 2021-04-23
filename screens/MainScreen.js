import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { Story } from '../components';
import { Svg } from '../assets';

function MainScreen(props) {
  const navigation = useNavigation();
  const onPressPlusIcon = () => navigation.navigate('AddStory');

  return (
    <SafeAreaViewLayout>
      <Story />
      <TouchableWrapper onPress={onPressPlusIcon}>
        <Svg name="add" />
      </TouchableWrapper>
    </SafeAreaViewLayout>
  );
}

export default MainScreen;

const SafeAreaViewLayout = styled.SafeAreaView`
  flex: 1;
`;

const Layout = styled.View`
  position: relative;
  flex: 1;
  height: 100%;
`;

const TouchableWrapper = styled.TouchableHighlight`
  position: absolute;
  height: 72px;
  bottom: 0;
  right: 0;
`;
