import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from '@emotion/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import FeedScreen from './screens/FeedScreen';
import AlbumScreen from './screens/AlbumScreen';
import MainScreen from './screens/MainScreen';
import MyPageScreen from './screens/MyPageScreen';
import AddStoryScreen from './screens/AddStoryScreen';
import EditStoryScreen from './screens/EditStoryScreen';
import MyPageEditScreen from './screens/MyPageEditScreen';

import theme from './style/theme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Album" component={AlbumScreen} />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddStory" component={AddStoryScreen} />
        <Stack.Screen name="EditStory" component={EditStoryScreen} />
        <Stack.Screen
          name="MyPageEdit"
          component={MyPageEditScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
