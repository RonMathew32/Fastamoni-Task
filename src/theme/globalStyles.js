import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  containerBG: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  containerAuth: {
    flex: 1,
    backgroundColor: COLORS.hardLavendarWhiteDim,
  },
  alignJC: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  alignR: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  alignJS: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alignJSR: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignSelf: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  alignSelfEPostionA: {
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  alignSelfEndJC: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  flexR: {
    flexDirection: 'row',
  },
  flexJS: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flexCJStart: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  flexRWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  shadow: {
    shadowColor: COLORS.darkGray,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  shadowWithOpactiy: {
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
  }
});

export default globalStyles;
