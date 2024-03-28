import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;

const wp = percentage => SCREEN_WIDTH * (percentage / 100);
const hp = percentage => SCREEN_HEIGHT * (percentage / 100);
const normalize = size => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export { wp, hp, normalize };
