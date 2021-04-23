import React from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

const FontText = ({ children }) => {
  const [loaded] = useFonts({
    UhBeeSeulvely: require('../../../assets/fonts/uhbee-seulvely.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  } else
    return (
      <View>
        <Text style={styles.defaultStyle}>{children}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'UhBeeSeulvely',
    color: '#F00',
  },
});

export default FontText;
