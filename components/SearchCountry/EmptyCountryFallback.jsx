import React from 'react';
import styled from '@emotion/native';
import { Svg } from '../../assets';
import { Pressable } from 'react-native';
import { palette } from '../../style/palette';
import { FontText } from '../common';

const EmptyCountryFallback = ({searchKeyword}) => {
  return (
    <EmptyCountryWrapper>
      <Svg name={'searchEmpty'} />
      <FallbackTextWrapper>
        <FallbackText>{`찾으시는 나라가 없습니다ㅠㅠ`}</FallbackText>
        <FallbackText>{`검색하신 나라로 입력할까요?`}</FallbackText>
      </FallbackTextWrapper>
      <Pressable onPress={() => console.log('press')}>
        <ButtonText>{`'${searchKeyword}'(으)로 입력하기`}</ButtonText>
      </Pressable>
    </EmptyCountryWrapper>
  );
};

export default EmptyCountryFallback;

const EmptyCountryWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 72px;
`;

const FallbackTextWrapper = styled.View`
  align-items: center;
  margin: 25px 0 16px 0;
`;

const FallbackText = styled(FontText)`
  font-size: 14px;
  line-height: 24px;
  color: ${palette.darkgray};
`;

const ButtonText = styled(FontText)`
  font-size: 16px;
  padding: 12px;
  border: 1px solid ${palette.darkbrown};
`;
