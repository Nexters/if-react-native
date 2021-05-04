import React, { useContext } from 'react';
import { Pressable, View } from 'react-native';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';

import Title from '../components/Title';
import Place from '../components/Place';
import CountryText from '../components/CountryText';
import ImageList from '../components/Image';
import Memo from '../components/Memo';
import { COMPONENT_TYPE, SCREEN_TYPE } from '../constants/types';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import Header, { IconItem } from '../components/Header';
import { palette } from '../style/palette';

import { StoryContext } from '../context';
import { StoryStateContext } from '../context/Story';

const images = [null, null];

function AddStoryScreen(props) {
  const navigation = useNavigation();

  const navigateBack = () => navigation.goBack();

  const handleClickComplete = () => {
    // TODO: 수정하기
    alert('Complete');
  };

  return (
    <SafeAreaViewLayout>
      <Header>
        <IconItem iconName="arrow" pressFunction={navigateBack} />
        <Pressable onPress={handleClickComplete}>
          <CompleteText isComplete={false}>완료</CompleteText>
        </Pressable>
      </Header>
      <StoryContext>
        <View>
          <Title type={COMPONENT_TYPE.INPUT} />
          <Place />
          <CountryText />
          <ImageList
            screenType={SCREEN_TYPE.ADD}
            type={COMPONENT_TYPE.INPUT}
            images={images}
          />
          <Memo type={COMPONENT_TYPE.INPUT} />
        </View>
      </StoryContext>
    </SafeAreaViewLayout>
  );
}

export default AddStoryScreen;

const CompleteText = styled.Text`
  font-size: 16px;
  color: ${({ isComplete }) =>
    isComplete ? palette.darkbrown : palette.darkgray};
`;
