import React from 'react';
import styled from '@emotion/native';
import { Linking } from 'react-native';
import { UsernameRow, AccountRow, ActionButton } from '../components/MyPage';
import { palette } from '../style/palette';
import { FontText } from '../components/common';
import Header, { IconItem } from '../components/Header';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import { useNavigation } from '@react-navigation/native';

function MyPageScreen() {
  const navigation = useNavigation();

  const navigateBack = () => navigation.goBack();

  const handleClickFeedback = () => {
    Linking.openURL(
      'mailto:if.traveler.dev@gmail.com?subject=If 개발자에게 피드백 보내기'
    );
  };

  const handleClickLeave = () => {
    console.log('handleClickLeave');
  };

  return (
    <>
      <SafeAreaViewLayout>
        <Header>
          <IconItem iconName="arrow" pressFunction={navigateBack} />
        </Header>
        <UsernameRow username={'방구석 여행러'} />
        <AccountRow social={'apple'} />
        <ActionButton
          text="피드백 남기기"
          onPressFunction={handleClickFeedback}
        />
        <ActionButton text="탈퇴하기" onPressFunction={handleClickLeave} />
      </SafeAreaViewLayout>
      <VersionInfo>버전정보 현재 1.0.0 </VersionInfo>
    </>
  );
}

export default MyPageScreen;

const VersionInfo = styled(FontText)`
  color: ${palette.darkgray};
  font-weight: 400;
  font-size: 13px;
  line-height: 42px;
  position: absolute;
  left: 24px;
  bottom: 67px;
`;
