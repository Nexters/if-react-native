import React from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

const FontText = ({ children, style, ...props }) => {
  const [loaded] = useFonts({
    UhBeeSeulvely: require('../../assets/fonts/uhbee-seulvely.ttf'),
  });
  if (!loaded) {
    return <ActivityIndicator />;
  } else
    return (
      <Text style={[styles.defaultStyle, style]} {...props}>
        {children}
      </Text>
    );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'UhBeeSeulvely',
  },
});

export default FontText;
