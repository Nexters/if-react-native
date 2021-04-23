import React from 'react';
import styled from '@emotion/native';
import { FontText } from '../common';
import { Svg } from '../../assets';

const Date = ({ date, bigger }) => {
  return (
    <DateWrapper>
      <DateText bigger={bigger}>{date}</DateText>
      <Divider bigger={bigger}>
        <Svg name="divider" />
      </Divider>
    </DateWrapper>
  );
};

export default Date;

const DateWrapper = styled.View`
  position: relative;
  margin-bottom: 16px;
`;

const DateText = styled(FontText)`
  font-size: ${({ bigger }) => (bigger ? '16px' : '12px')};
`;

const Divider = styled.View`
  .icon {
    position: absolute;
    top: ${({ bigger }) => (bigger ? '15px' : '13px')};
  }
`;
