import React from 'react';
import ActionModal from './ActionModal';

function LeaveModal({ modalVisible, handleModalClose }) {
  // TODO: '방구석여행러' 수정하기
  const leaveTextArr = [
    '방구석여행러님의',
    '모든 기록들이 영영 사라져요.',
    '정말 탈퇴하시겠어요?',
  ];

  const handleLeave = () => {
    // TODO: 탈퇴하기 기능 추가하기
    console.log('탈퇴하기 기능 추가');
  };

  return (
    <ActionModal
      modalVisible={modalVisible}
      handleModalClose={handleModalClose}
      textArr={leaveTextArr}
      actionFunction={handleLeave}
      actionText={'탈퇴할게요'}
    />
  );
}

export default LeaveModal;
