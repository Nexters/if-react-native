import React from 'react';
import { Pressable } from 'react-native';
import styled from '@emotion/native';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import Header, { IconItem } from '../components/Header';
import { palette } from '../style/palette';
import { useNavigation } from '@react-navigation/native';

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
    </SafeAreaViewLayout>
  );
}

export default AddStoryScreen;

const CompleteText = styled.Text`
  font-size: 16px;
  color: ${({ isComplete }) =>
    isComplete ? palette.darkbrown : palette.darkgray};
`;
