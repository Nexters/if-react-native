import React from 'react';
import styled from '@emotion/native';
import { FontTextInput } from '../common';
import { palette } from '../../style/palette';

const TitleInput = () => {
  return <Input placeholder="제목을 입력해주세요 :)" value={'hi'}></Input>;
};

export default TitleInput;

const Input = styled(FontTextInput)`
  width: 100%;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.2;
`;
