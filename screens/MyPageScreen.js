import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header, { IconItem } from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';

function MyPageScreen(props) {
  const navigation = useNavigation();

  const navigateBack = () => navigation.goBack();

  return (
    <SafeAreaViewLayout>
      <Header>
        <IconItem iconName="arrow" pressFunction={navigateBack} />
      </Header>
      <Text>My Page</Text>
    </SafeAreaViewLayout>
  );
}

export default MyPageScreen;
