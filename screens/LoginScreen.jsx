import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import { Svg } from '../assets';
import styled from '@emotion/native';
import * as Google from 'expo-google-app-auth'


function LoginScreen(props) {

  const GOOGLE_CLIENT_ID = "580970977777-hd9briu5unomfs8kvusk9253g8hcm8in.apps.googleusercontent.com"
  
  let accessToken; 

  const config = {
    iosClientId: GOOGLE_CLIENT_ID,
    scopes: ['profile', 'email'],
  }

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync(config);
      console.log(result); 
  
      if (result.type === 'success') {
        accessToken = result.accessToken; 
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e); 
      return { error: true };
    }
  }

  async function signOutGoogle () {
    try {
      await Google.logOutAsync({accessToken, ...config})
    } catch (e) {
      console.log(e); 
    }
  } 
  
  return (
    <SafeAreaViewLayout>
      <IconContainer>
        <Svg name="login" />
      </IconContainer>

      <Text onPress={signInWithGoogleAsync}>Google 로그인</Text>
      <Text onPress={signOutGoogle}>Google 사인아웃</Text>

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
