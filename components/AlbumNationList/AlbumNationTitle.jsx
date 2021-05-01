import React from 'react';
import styled from '@emotion/native';

import { palette } from '../../style/palette';
import { FontText } from '../common';

function AlbumNationTitle({children}) {
  return (
    <Title>{children}</Title>
  )
}

export default AlbumNationTitle;

const Title = styled(FontText)`
  font-size: 20px;
  line-height: 30px;
  color: ${palette.darkbrown};
  margin-bottom: 32px;
`
