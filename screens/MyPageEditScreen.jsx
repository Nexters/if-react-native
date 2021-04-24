import React, { useState } from 'react';
import styled from '@emotion/native';
import { Svg } from '../assets';
import { palette } from '../style/palette';

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
      <InputWrapper>
        <UsernameInput
          autoFocus
          defaultValue={usernameInput}
          onChangeText={handleUsernmeInputChange}
          placeholder={'이름을 입력하세요. (최대 10글자)'}
          maxLength={10}
        />
        {usernameInput.length > 0 && (
          <CancelWrapper onPress={handleClickCancel}>
            <Svg name="cancel" />
          </CancelWrapper>
        )}
      </InputWrapper>
      {usernameInput.length > 0 && <Count>{usernameInput.length}/10</Count>}
    </ScreenWrapper>
  );
}

export default MyPageEditScreen;

const ScreenWrapper = styled.View`
  margin-top: 60px;
  padding: 0 24px;
`;

const InputWrapper = styled.View`
  padding-bottom: 8px;
  border-bottom-color: ${palette.darkbrown};
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UsernameInput = styled.TextInput`
  margin-top: 24px;
  font-size: 20px;
`;

const CancelWrapper = styled.Pressable`
  top: 30px;
`;

const Count = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  line-height: 28px;
`;
