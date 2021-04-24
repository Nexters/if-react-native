import React from 'react';
import { Image } from 'react-native';
import styled from '@emotion/native';
import { FontText } from '../common';
import Date from '../Date';
import StoryAddIcon from '../StoryAddIcon';

const Story = ({
  title,
  isEmpty = true,
  position = 'left',
  date = '20.01.24',
  img,
}) => {
  return (
    <StoryWrapper position={position}>
      <PictureWrapper>
        {img ? <Image source="" /> : <StoryAddIcon />}
      </PictureWrapper>
      <Date date={date} />
      <Title numberOfLines={1} isEmpty={isEmpty}>
        {title || '식사하셨어요?'}
      </Title>
    </StoryWrapper>
  );
};

const StoryWrapper = styled.View`
  position: relative;
  width: 220px;
  height: 282px;
  margin: ${(props) =>
    props.position === 'left' ? '0 auto 60px 20px' : '0 20px 60px auto'};
  padding: 12px;
  border: 1px solid #1a1515;
  background-color: #ffffff;
`;

const PictureWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 196px;
  margin-bottom: 12px;
  border: 1px solid #1a1515;
`;

const Title = styled(FontText)`
  font-size: 17px;
  line-height: 20px;
  color: ${({ isEmpty }) => (isEmpty ? '#AAA7A5' : '#1a1515')};
  overflow: hidden;
`;
export default Story;
