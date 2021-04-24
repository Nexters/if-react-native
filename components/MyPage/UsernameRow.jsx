import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { Svg } from '../../assets';
import { FontText } from '../common';

function UsernameRow({ username }) {
  const navigation = useNavigation();

  const handleClickEdit = () => {
    console.log('handleClickEdit');
    navigation.navigate('MyPageEdit');
  };

  return (
    <Wrapper>
      <Username>{username}</Username>
      <EditIcon onPress={handleClickEdit}>
        <Svg name="edit" />
      </EditIcon>
    </Wrapper>
  );
}

export default UsernameRow;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const Username = styled(FontText)`
  font-size: 24px;
  line-height: 30px;
`;

const EditIcon = styled.Pressable`
  margin: 3px 0 0 8px;
`;
