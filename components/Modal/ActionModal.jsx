import React from 'react';
import { Modal, Pressable, View } from 'react-native';
import styled from '@emotion/native';
import { palette } from '../../style/palette';
import { FontText } from '../common';
import { Svg } from '../../assets';

function ActionModal({
  modalVisible,
  handleModalClose,
  textArr,
  actionFunction,
  actionText,
}) {
  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      onRequestClose={handleModalClose}
      transparent={true}
    >
      <StyledView>
        <ModalView>
          {textArr.map((text, i) => (
            <BodyText key={i}>{text}</BodyText>
          ))}
          <ButtonWrapper>
            <Pressable onPress={actionFunction}>
              <ButtonText gray={true}>{actionText}</ButtonText>
            </Pressable>
            <View>
              <Pressable onPress={handleModalClose}>
                <ButtonText>아니요</ButtonText>
              </Pressable>
              <Svg name="line" />
            </View>
          </ButtonWrapper>
        </ModalView>
      </StyledView>
    </Modal>
  );
}

export default ActionModal;

const StyledView = styled.View`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalView = styled.View`
  margin: 286px 24px 0 24px;
  padding: 32px 36px 19px 36px;
  background-color: white;
  border: 1px solid ${palette.darkbrown};
`;

const BodyText = styled(FontText)`
  text-align: center;
  font-size: 16px;
  line-height: 28px;
  color: ${palette.darkbrown};
`;

const ButtonWrapper = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonText = styled(FontText)`
  font-size: 14px;
  line-height: 24px;
  color: ${({ gray }) => (gray ? palette.darkgray : palette.darkbrown)};
`;
