import React from 'react';
import ActionModal from './ActionModal';

function LogoutModal({ modalVisible, handleModalClose }) {
  const logoutTextArr = [
    '언제든지 다시',
    '기록하고 싶다면 찾아오세요!',
    '로그아웃 하시겠어요? ',
  ];

  const handleLogout = () => {
    // TODO: 로그아웃 기능 추가하기
    console.log('로그아웃 기능 추가');
  };

  return (
    <ActionModal
      modalVisible={modalVisible}
      handleModalClose={handleModalClose}
      textArr={logoutTextArr}
      actionFunction={handleLogout}
      actionText={'로그아웃할게요'}
    />
  );
}

export default LogoutModal;
