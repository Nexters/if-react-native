import React from 'react';
import styled from '@emotion/native';
import { Svg } from '../../assets';
import { FontText } from '../common';

function ActionButton({ text, onPressFunction }) {
  return (
    <Wrapper onPress={onPressFunction}>
      <ButtonText>{text}</ButtonText>
      <Svg name="arrow2" />
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

const ButtonText = styled(FontText)`
  font-size: 16px;
`;