import React from 'react';
import { Text, Button } from 'react-native';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import { Svg } from '../assets';
import styled from '@emotion/native';
import * as Google from 'expo-google-app-auth'
import * as AppleAuthentication from 'expo-apple-authentication'; 

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

  async function signInApple() {
    console.log("sign in apple")
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME, 
          AppleAuthentication.AppleAuthenticationScope.EMAIL, 
        ], 
      }); 
      console.log(credential)
    } catch (e) {
      console.log(e); 
      console.log(e.code); 
    }
  }

  
  
  return (
    <SafeAreaViewLayout>
      <IconContainer>
        <Svg name="login" />
      </IconContainer>

      <Text onPress={signInWithGoogleAsync}>Google 로그인</Text>
      <Text onPress={signOutGoogle}>Google 사인아웃</Text>

      <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={{ width: 200, height: 44 }}
      onPress={signInApple}
    />

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
