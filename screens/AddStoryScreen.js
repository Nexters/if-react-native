import React from 'react';
import styled from '@emotion/native';
import Title from '../components/Title';
import Place from '../components/Place';
import CountryText from '../components/CountryText';
import Image from '../components/Image';
import { COMPONENT_TYPE, SCREEN_TYPE } from '../constants/types';

function AddStoryScreen(props) {
  return (
    <ScreenView>
      <Title type={COMPONENT_TYPE.INPUT} />
      <Place />
      <CountryText />
      <Image screenType={SCREEN_TYPE.ADD} type={COMPONENT_TYPE.INPUT} />
    </ScreenView>
  );
}

export default AddStoryScreen;

const ScreenView = styled.View`
  padding: 24px;
`;
