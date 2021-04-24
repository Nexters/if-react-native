import React from 'react';
import styled from '@emotion/native';
import Title from '../components/Title';
import Place from '../components/Place';
import CountryText from '../components/CountryText';
import ImageList from '../components/Image';
import Memo from '../components/Memo';
import { COMPONENT_TYPE, SCREEN_TYPE } from '../constants/types';

const images = [{ image: null }, { image: null }, { image: null }];

function AddStoryScreen(props) {
  return (
    <ScreenView>
      <Title type={COMPONENT_TYPE.INPUT} />
      <Place />
      <CountryText />
      <ImageList
        screenType={SCREEN_TYPE.ADD}
        type={COMPONENT_TYPE.INPUT}
        images={images}
      />
      <Memo type={COMPONENT_TYPE.INPUT} />
    </ScreenView>
  );
}

export default AddStoryScreen;

const ScreenView = styled.View`
  padding: 24px;
`;
