import React from 'react';
import styled from '@emotion/native';

function SafeAreaViewLayout({ children, includeFlex = false }) {
  return <Wrapper includeFlex={includeFlex}>{children}</Wrapper>;
}

export default SafeAreaViewLayout;

const Wrapper = styled.SafeAreaView`
  margin: 0 24px;
  ${({ includeFlex }) => (includeFlex ? 'flex: 1;' : '')}
`;
