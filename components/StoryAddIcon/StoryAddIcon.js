import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { Svg } from '../../assets';

const StoryAddIcon = () => {
  const navigation = useNavigation();
  const onPressPlusIcon = () => navigation.navigate('AddStory');
  return (
    <TouchableIcon onPress={onPressPlusIcon}>
      <Svg name="plus" />
    </TouchableIcon>
  );
};

export default StoryAddIcon;

const TouchableIcon = styled.TouchableHighlight``;
