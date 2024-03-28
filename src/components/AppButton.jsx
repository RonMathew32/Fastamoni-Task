import React, { useMemo, useCallback } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { hp, normalize, wp } from '../theme/dimensions';
import { COLORS } from '../theme/colors';
import globalStyles from '../theme/globalStyles';

const AppButton = ({ loading, onPress, loaderSize = 'small', loaderColor = COLORS.hardCodeWhite, title = '', style, textStyle }) => {
  const buttonContent = useMemo(() => (
    loading ? <ActivityIndicator size={loaderSize} color={loaderColor} /> : <Text style={[styles.buttontxt, textStyle]}>{title}</Text>
  ), [loading, loaderSize, loaderColor, title, textStyle]);

  const handlePress = useCallback(() => {
    if (!loading) {
      onPress();
    }
  }, [loading, onPress]);

  return (
    <TouchableOpacity disabled={loading} onPress={handlePress} style={[styles.button, globalStyles.alignJC, style]}>
      {buttonContent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: hp(6),
    width: '50%',
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    borderRadius: wp(3),
    marginTop: hp(3),
    borderColor: COLORS.lavendarWhite,
  },
  buttontxt: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: COLORS.hardCodeWhite,
  },
});

export default React.memo(AppButton);
