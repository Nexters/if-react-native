import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import AlbumScreen from './screens/AlbumScreen';
import MainScreen from './screens/MainScreen';
import MyPageScreen from './screens/MyPageScreen';
import AddStoryScreen from './screens/AddStoryScreen';
import EditStoryScreen from './screens/EditStoryScreen';
import MyPageEditScreen from './screens/MyPageEditScreen';
import SearchCountryScreen from './screens/SearchCountryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Album" component={AlbumScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen} />
        <Stack.Screen name="AddStory" component={AddStoryScreen} />
        <Stack.Screen name="EditStory" component={EditStoryScreen} />
        <Stack.Screen name="MyPageEdit" component={MyPageEditScreen} />
        <Stack.Screen name="SearchCountry" component={SearchCountryScreen} />
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
