import React from 'react';
import styled from '@emotion/native';
import { FontText } from '../common';
import MemoInput from './MemoInput';
import { COMPONENT_TYPE } from '../../constants/types';

const Memo = ({ type, memo }) => {
  return (
    <MemoView>
      {type === COMPONENT_TYPE.INPUT ? (
        <MemoInput memo={memo} />
      ) : (
        <MemoText>그냥</MemoText>
      )}
    </MemoView>
  );
};

export default Memo;

const MemoView = styled.View`
  margin: 24px 0;
`;

const MemoText = styled(FontText)`
  font-size: 16px;
  line-height: 35px;
`;
