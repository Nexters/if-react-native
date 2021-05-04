import React, { useState, useContext } from 'react';
import styled from '@emotion/native';
import { FontText } from '../common';
import TitleInput from './TitleInput';
import { COMPONENT_TYPE } from '../../constants/types';
import { StoryStateContext } from '../../context/Story';

const Title = ({ type }) => {
  const StoryState = useContext(StoryStateContext);
  const [title, setTitle] = useState(StoryState.title);

  return (
    <TitleView>
      {type === COMPONENT_TYPE.TEXT ? (
        <TitleText>{title}</TitleText>
      ) : (
        <TitleInput title={title} setTitle={setTitle} />
      )}
    </TitleView>
  );
};

export default Title;

const TitleView = styled.View`
  margin-bottom: 12px;
`;

const TitleText = styled(FontText)`
  width: 100%;
  margin-bottom: 12px;
  font-size: 22px;
  line-height: 30px;
`;
