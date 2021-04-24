import React from 'react';
import { Svg } from '../../assets';
import { Pressable } from 'react-native';

function IconItem({ iconName, pressFunction }) {
  return (
    <Pressable onPress={pressFunction}>
      <Svg name={iconName} />
    </Pressable>
  );
}

export default IconItem;
