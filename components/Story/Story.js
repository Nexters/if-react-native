import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styled from '@emotion/native';
import Date from '../Date';

const Story = ({ title, isEmpty = true }) => {
  return (
    <StoryWrapper>
      <PictureWrapper>
        <Image source="" />
      </PictureWrapper>
      <Date />
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
    props.position === 'left' ? '0 auto 60px 0' : '0 0 60px auto'};
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

const Title = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${({ isEmpty }) => (isEmpty ? '#AAA7A5' : '#1a1515')};
  overflow: hidden;
`;
export default Story;
