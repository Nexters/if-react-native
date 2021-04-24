import React from 'react';
import styled from '@emotion/native';
import Image from './Image';
import { COMPONENT_TYPE } from '../../constants/types';
import { palette } from '../../style/palette';

const ImageList = ({ screenType, type, images = [] }) => {
  return (
    <ImageListWrapper horizontal={true}>
      {images.map((image, idx) => (
        <Image
          type={COMPONENT_TYPE.IMAGE}
          key={idx}
          index={idx}
          image={image}
          screenType={screenType}
        />
      ))}
      {type === COMPONENT_TYPE.INPUT && images.length < 5 && (
        <Image type={COMPONENT_TYPE.INPUT} />
      )}
    </ImageListWrapper>
  );
};

const ImageListWrapper = styled.ScrollView`
  flex-direction: row;
  padding: 24px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${palette.darkgray};
`;

export default ImageList;
