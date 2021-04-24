import React from 'react';
import styled from '@emotion/native';
import Title from '../components/Title';
import Place from '../components/Place';
import { COMPONENT_TYPE } from '../constants/types';

function AddStoryScreen(props) {
  return (
    <ScreenView>
      <Title type={COMPONENT_TYPE.INPUT} />
      <Place />
    </ScreenView>
  );
}

export default AddStoryScreen;

const ScreenView = styled.View`
  padding: 24px;
`;
