import React from 'react';
import styled from '@emotion/native';
import { FontTextInput } from '../common';
import { palette } from '../../style/palette';

const example = `미국여행갔을 때 불고기 버거있냐고 했던 부끄러운 과거의 나를 회상하며 불고기 버거가 아닌 1955버거를 주문했다. 두유 노 불고기... 맥너겟 4조각과 스윗 앤 사우어 소스는 국룰이므로 당연히 추가해줬다. 맥너겟을 위한 금액추가는 하나도 아깝지 않아 나는...♥️`;

const MemoInput = ({ memo = example }) => {
  const onChangeMemo = (memoText) => {};

  return (
    <MemoTextInput
      placeholder={'무엇을 드셨나요?'}
      multiline={true}
      value={memo}
      onChangeText={onChangeMemo}
    />
  );
};

export default MemoInput;

const MemoTextInput = styled(FontTextInput)`
  font-size: 16px;
  line-height: 35px;
  color: ${palette.darkbrown};
  ::placeholder {
    color: ${palette.darkgray};
  }
`;
