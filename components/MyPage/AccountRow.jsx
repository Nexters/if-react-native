import React from 'react';
import styled from '@emotion/native';
import { Svg } from '../../assets';
import { palette } from '../../style/palette';
import { FontText } from '../common';

const accountToKor = {
  kakao: '카카오',
  naver: '네이버',
  apple: '애플',
};

function AccountRow({ social }) {
  const handleClickLogout = () => {
    console.log('handleClickLogout');
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Svg name={social} />
        <AccountInfo>{accountToKor[social]} 계정 로그인</AccountInfo>
      </InnerWrapper>
      <LogoutButton onPress={handleClickLogout}>
        <LogoutText>로그아웃</LogoutText>
      </LogoutButton>
    </OuterWrapper>
  );
}

export default AccountRow;

const OuterWrapper = styled.View`
  margin: 16px 0 24px 0;
  padding-bottom: 24px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: ${palette.lightgray};
  border-bottom-width: 1px;
`;

const InnerWrapper = styled.View`
  flex-direction: row;
`;

const AccountInfo = styled(FontText)`
  margin-left: 4px;
  font-size: 14px;
`;

const LogoutButton = styled.Pressable``;

const LogoutText = styled(FontText)`
  font-size: 12px;
`;
