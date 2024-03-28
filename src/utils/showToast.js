import Toast from 'react-native-root-toast';
import { COLORS } from '../theme/colors';

export const ToastMessageLight = (msg) => {
  Toast.show(msg, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    backgroundColor: COLORS.white,
    textColor: COLORS.black,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
};

export const ToastMessageDark = (msg) => {
  Toast.show(msg, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    backgroundColor: COLORS.black,
    textColor: COLORS.white,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
};
