import React from 'react';
import { TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

const FontText = ({
  children,
  style,
  value,
  onChange,
  onChangeText,
  ...props
}) => {
  const [loaded] = useFonts({
    UhBeeSeulvely: require('../../assets/fonts/uhbee-seulvely.ttf'),
  });
  if (!loaded) {
    return <ActivityIndicator />;
  } else
    return (
      <TextInput
        style={[styles.defaultStyle, style]}
        value={value}
        onChange={onChange}
        onChangeText={onChangeText}
        {...props}
      ></TextInput>
    );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'UhBeeSeulvely',
  },
});

export default FontText;
