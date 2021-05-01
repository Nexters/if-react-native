import React from 'react';
import { Pressable } from 'react-native';
import styled from '@emotion/native';
import { Svg } from '../../assets';

const ImageInput = () => {
  return (
    <PressablePlusIcon>
      <Svg name="plus" />
    </PressablePlusIcon>
  );
};

export default ImageInput;

const PressablePlusIcon = styled.Pressable`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
