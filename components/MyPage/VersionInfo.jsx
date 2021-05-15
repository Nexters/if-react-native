import React from 'react';
import { FontText } from '../common';
import styled from '@emotion/native';
import { palette } from '../../style/palette';

function VersionInfo() {
  return <StyledText>버전정보 현재 1.0.0</StyledText>;
}

export default VersionInfo;

const StyledText = styled(FontText)`
  position: absolute;
  left: 24px;
  bottom: 67px;
  color: ${palette.darkgray};
  font-weight: 400;
  font-size: 13px;
  line-height: 42px;
`;
