import React from 'react';
import { SvgXml } from 'react-native-svg';
import svgIcons from './svg';

export const Svg = ({ name }) => {
  return <SvgXml xml={svgIcons[name]} />;
};
