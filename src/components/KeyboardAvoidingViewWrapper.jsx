import React, { useMemo, ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { hp } from '../theme/dimensions';

const KeyboardAvoidingViewWrapper = ({ children }) => {
  const behavior = useMemo(() => (Platform.OS === 'ios' ? 'padding' : 'height'), []);
  const keyboardVerticalOffset = useMemo(() => (Platform.OS === 'ios' ? 40 : 0), []);

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={styles.container}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <ScrollView>
        <View style={styles.innerContainer}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});

export default React.memo(KeyboardAvoidingViewWrapper);
