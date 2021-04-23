import React from 'react';
import styled from '@emotion/native';
import { Svg } from '../../assets';

function ActionButton({ text, onPressFunction }) {
  return (
    <Wrapper onPress={onPressFunction}>
      <ButtonText>{text}</ButtonText>
      <Svg name="arrow" />
    </Wrapper>
  );
}

export default ActionButton;

const Wrapper = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
`;
