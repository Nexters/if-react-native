import React, { useState } from 'react';
import { Linking } from 'react-native';
import {
  UsernameRow,
  AccountRow,
  ActionButton,
  VersionInfo,
} from '../components/MyPage';
import { LeaveModal } from '../components/Modal';
import Header, { IconItem } from '../components/Header';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import { useNavigation } from '@react-navigation/native';

function MyPageScreen() {
  const navigation = useNavigation();

  const [showLeaveModal, setShowLeaveModal] = useState(false);

  const navigateBack = () => navigation.goBack();

  const handleClickFeedback = () => {
    Linking.openURL(
      'mailto:if.traveler.dev@gmail.com?subject=If 개발자에게 피드백 보내기'
    );
  };

  const handleClickLeave = () => {
    setShowLeaveModal(true);
  };

  const handleModalClose = () => {
    setShowLeaveModal(false);
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
      <VersionInfo />
      <LeaveModal
        modalVisible={showLeaveModal}
        handleModalClose={handleModalClose}
      />
    </>
  );
}

export default MyPageScreen;
