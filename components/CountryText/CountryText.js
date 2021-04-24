import React from 'react';
import styled from '@emotion/native';
import { COMPONENT_TYPE } from '../../constants/types';
import { FontText } from '../common';
import { palette } from '../../style/palette';

const Country = ({ type }) => {
  return (
    <CountryView>
      <CountryFlagImageWrapper>
        <CountryImage
          source={
            'https://tripinmyroom.s3.ap-northeast-2.amazonaws.com/flags/etc.svg'
          }
        />
      </CountryFlagImageWrapper>
      <CountryText empty={true}>여행한 나라</CountryText>
    </CountryView>
  );
};

export default Country;

const CountryView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 26px;
`;

const CountryFlagImageWrapper = styled.View`
  width: 24px;
  height: 16px;
  border: 1px solid ${palette.darkbrown};
  background: ${palette.background};
`;

const CountryImage = styled.Image``;

const CountryText = styled(FontText)`
  margin-left: 8px;
  line-height: 28px;
  font-size: 16px;
  color: ${({ empty }) => (empty ? palette.darkgray : palette.darkbrown)};
`;
