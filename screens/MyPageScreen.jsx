import React from 'react';
import styled from '@emotion/native';
import { Linking } from 'react-native';
import { UsernameRow, AccountRow, ActionButton } from '../components/MyPage';
import { palette } from '../style/palette';

function MyPageScreen() {
  const handleClickFeedback = () => {
    Linking.openURL(
      'mailto:if.traveler.dev@gmail.com?subject=If 개발자에게 피드백 보내기'
    );
  };

  const handleClickLeave = () => {
    console.log('handleClickLeave');
  };

  return (
    <ScreenWrapper>
      <UsernameRow username={'방구석 여행러'} />
      <AccountRow social={'kakao'} />
      <AccountRow social={'naver'} />
      <ActionButton
        text="피드백 남기기"
        onPressFunction={handleClickFeedback}
      />
      <ActionButton text="탈퇴하기" onPressFunction={handleClickLeave} />
      <VersionInfo>버전정보 현재 1.0.0 </VersionInfo>
    </ScreenWrapper>
  );
}

export default MyPageScreen;

const ScreenWrapper = styled.View`
  margin-top: 60px;
  padding: 0 24px;
`;

const VersionInfo = styled.Text`
  color: ${palette.darkgray};
  font-weight: 400;
  font-size: 13px;
  line-height: 42px;
`;
