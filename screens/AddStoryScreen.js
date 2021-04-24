import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchCountry from '../components/SearchCountry';

function AddStoryScreen(props) {
  return (
    <View>
      <Text>Add Story</Text>
      <SearchCountry />
    </View>
  );
}

export default AddStoryScreen;
