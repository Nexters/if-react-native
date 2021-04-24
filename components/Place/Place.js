import React from 'react';
import styled from '@emotion/native';
import { FontText } from '../common';
import PlaceInput from './PlaceInput';
import { Svg } from '../../assets';
import { COMPONENT_TYPE } from '../../constants/types';

const Place = ({ type = COMPONENT_TYPE.INPUT }) => {
  return (
    <PlaceView>
      <Svg name="location" />
      {type === COMPONENT_TYPE.TEXT && <PlaceText>음식을 먹은 장소</PlaceText>}
      {type === COMPONENT_TYPE.INPUT && <PlaceText>음식을 먹은 장소</PlaceText>}
      <StaticText>에서 느낀</StaticText>
    </PlaceView>
  );
};

export default Place;

const PlaceView = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;

const PlaceText = styled(FontText)`
  margin: 0 4px 0 8px;
  font-size: 16px;
`;

const StaticText = styled(FontText)`
  font-size: 14px;
  opacity: 0.3;
`;
