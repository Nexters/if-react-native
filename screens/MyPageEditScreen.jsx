import React, { useState } from 'react';
import { Pressable } from 'react-native';
import styled from '@emotion/native';
import { Svg } from '../assets';
import { palette } from '../style/palette';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import { FontText, FontTextInput } from '../components/common';
import Header, { IconItem } from '../components/Header';
import { useNavigation } from '@react-navigation/native';

function MyPageEditScreen() {
  const navigation = useNavigation();
  const navigateBack = () => navigation.goBack();

  const [usernameInput, setUsernameInput] = useState('');
  const handleUsernmeInputChange = (inputValue) => setUsernameInput(inputValue);
  const handleClickCancel = () => setUsernameInput('');

  const handleClickComplete = () => {
    // TODO: 완료 함수 추가하기
  };

  return (
    <SafeAreaViewLayout>
      <Header>
        <IconItem iconName="arrow" pressFunction={navigateBack} />
        <Pressable onPress={handleClickComplete}>
          <CompleteText isComplete={usernameInput.length > 0}>
            완료
          </CompleteText>
        </Pressable>
      </Header>
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
    </SafeAreaViewLayout>
  );
}

export default MyPageEditScreen;

const InputWrapper = styled.View`
  padding-bottom: 8px;
  border-bottom-color: ${palette.darkbrown};
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UsernameInput = styled(FontTextInput)`
  font-size: 20px;
`;

const CancelWrapper = styled.Pressable`
  top: 8px;
`;

const Count = styled(FontText)`
  margin-top: 8px;
  font-size: 16px;
  line-height: 28px;
`;

const CompleteText = styled(FontText)`
  font-size: 16px;
  color: ${({ isComplete }) =>
    isComplete ? palette.darkbrown : palette.darkgray};
`;
