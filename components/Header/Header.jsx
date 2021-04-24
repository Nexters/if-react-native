import React from 'react';
import styled from '@emotion/native';

function Header({ children }) {
  return <HeaderWrapper>{children}</HeaderWrapper>;
}

export default Header;

const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 44px;
  margin-bottom: 42px;
`;
