import React, { useState } from 'react';
import styled from '@emotion/native';
import { Svg } from '../assets';

function MyPageEditScreen() {
  const [usernameInput, setUsernameInput] = useState('');

  const handleUsernmeInputChange = (inputValue) => {
    setUsernameInput(inputValue);
  };

  const handleClickCancel = () => {
    setUsernameInput('');
  };

  return (
    <ScreenWrapper>
      <UsernameInput
        autoFocus
        defaultValue={usernameInput}
        onChangeText={handleUsernmeInputChange}
        placeholder={'이름을 입력하세요. (최대 10글자)'}
        maxLength={10}
      />
      <CancelWrapper onPress={handleClickCancel}>
        <Svg name="cancel" />
      </CancelWrapper>
      {usernameInput.length > 0 && <Count>{usernameInput.length}/10</Count>}
    </ScreenWrapper>
  );
}

export default MyPageEditScreen;

const ScreenWrapper = styled.View`
  margin-top: 60px;
  padding: 0 24px;
`;

const UsernameInput = styled.TextInput`
  margin-top: 24px;
  font-size: 20px;
`;

const CancelWrapper = styled.Pressable``;

const Count = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  line-height: 28px;
`;
