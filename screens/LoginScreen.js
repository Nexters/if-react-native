import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function LoginScreen(props) {
  return (
    <SafeAreaView>
      <Text>로그인 화면</Text>
      <Button title="앨범" onPress={() => props.navigation.navigate('Album')} />
      <Button title="메인" onPress={() => props.navigation.navigate('Main')} />
      <Button
        title="마이 페이지"
        onPress={() => props.navigation.navigate('MyPage')}
      />
      <Button
        title="추가"
        onPress={() => props.navigation.navigate('AddStory')}
      />
      <Button
        title="수정"
        onPress={() => props.navigation.navigate('EditStory')}
      />
    </SafeAreaView>
  );
}

export default LoginScreen;
