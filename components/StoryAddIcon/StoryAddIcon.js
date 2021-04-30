import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { Svg } from '../../assets';

const StoryAddIcon = () => {
  const navigation = useNavigation();
  const onPressPlusIcon = () => navigation.navigate('AddStory');
  return (
    <IconWrapper onPress={onPressPlusIcon}>
      <Svg name="plus" />
    </IconWrapper>
  );
};

export default StoryAddIcon;

const IconWrapper = styled.Pressable`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
