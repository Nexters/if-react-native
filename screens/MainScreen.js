import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import styled from '@emotion/native';
import { Story } from '../components';
import { Svg } from '../assets';

function MainScreen(props) {
  return (
    <SafeAreaViewLayout>
      <Story />
      <ButtonWrapper>
        <Svg name="add" />
      </ButtonWrapper>
    </SafeAreaViewLayout>
  );
}

export default MainScreen;

const SafeAreaViewLayout = styled.SafeAreaView`
  flex: 1;
`;

const Layout = styled.View`
  position: relative;
  flex: 1;
  height: 100%;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  height: 72px;
  bottom: 0;
  right: 0;
`;
