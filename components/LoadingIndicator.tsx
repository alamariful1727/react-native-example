import * as React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export const LoadingIndicator = () => {
  return (
    <View style={styles.fill}>
      <ActivityIndicator size="large" color="#3dcab1" />
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
