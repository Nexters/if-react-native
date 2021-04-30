import React, { useState } from 'react';
import styled from '@emotion/native';
import ImageInput from './ImageInput';
import { Svg } from '../../assets';
import { COMPONENT_TYPE, SCREEN_TYPE } from '../../constants/types';
import { palette } from '../../style/palette';
import { View } from 'react-native';

const Image = ({ screenType, type, image }) => {
  const [imageData, setImage] = useState(image);
  return (
    <ImageWrapper screenType={screenType}>
      {type === COMPONENT_TYPE.INPUT && !imageData ? (
        <ImageInput setImage={setImage} />
      ) : (
        <View>
          <ImageContent screenType={screenType} source={{ uri: imageData }} />
          <RemoveIcon>
            <Svg name="remove" />
          </RemoveIcon>
        </View>
      )}
    </ImageWrapper>
  );
};

export default Image;

const ImageWrapper = styled.View`
  position: relative;
  width: ${({ screenType }) =>
    screenType === SCREEN_TYPE.DETAIL ? '270px' : '116px'};
  height: ${({ screenType }) =>
    screenType === SCREEN_TYPE.DETAIL ? '270px' : '116px'};
  flex: 0 0 auto;
  margin: 6px 8px 0 0;
  background-color: ${palette.white};
  border: 1px solid ${palette.darkbrown};
`;

const ImageContent = styled.Image`
  width: ${({ screenType }) =>
    screenType === SCREEN_TYPE.DETAIL ? '268px' : '114px'};
  height: ${({ screenType }) =>
    screenType === SCREEN_TYPE.DETAIL ? '268px' : '114px'};
`;

const RemoveIcon = styled.View`
  position: absolute;
  top: -8px;
  right: -5px;
`;
