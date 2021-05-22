import React, { useEffect } from 'react';
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
import AlbumFeedScreen from './screens/AlbumFeedScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem('token', 'eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ1c2VyIiwic3ViIjoiTmV4dGVyc0lmIiwiaXNzIjoiTmV4dGVyczZ0ZWFtIiwiZXhwIjoxODgwODczNjA3MjEzLCJpYXQiOjE2MjE2NzM2MDcyMTMsImlkIjoiMWU1Zjc3MzMtMjAxNC00Nzc2LTk1MDItZjUxN2NlZjNmMTc0Iiwic29jaWFsIjoia2FrYW8ifQ.BzTltw94xDmcL2lWBYYiSurOnBVhoCz_4vTpzVi2zl8')
    })()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Album" component={AlbumScreen} />
          <Stack.Screen name="AlbumFeed" component={AlbumFeedScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="MyPage" component={MyPageScreen} />
          <Stack.Screen name="AddStory" component={AddStoryScreen} />
          <Stack.Screen name="EditStory" component={EditStoryScreen} />
          <Stack.Screen name="MyPageEdit" component={MyPageEditScreen} />
          <Stack.Screen name="SearchCountry" component={SearchCountryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
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
