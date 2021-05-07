import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import { Svg } from '../assets';
import styled from '@emotion/native';

function LoginScreen(props) {
  return (
    <SafeAreaViewLayout>
      <IconContainer>
        <Svg name="login" />
      </IconContainer>

      <Button title="앨범" onPress={() => props.navigation.navigate('Album')} />
    </SafeAreaViewLayout>
  );
}

export default LoginScreen;

const IconContainer = styled.View`
  margin-top: 243px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
