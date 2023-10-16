import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const spacing = 16;
const padding = 16;
const borderRadius = 8;
const fontSize = 16;

export const Metrics = {
  screenWidth: width,
  screenHeight: height,
  spacing,
  padding,
  borderRadius,
  fontSize,
};
