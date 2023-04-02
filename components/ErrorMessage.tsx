import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {
  message: string;
};

export const ErrorMessage = ({ message }: Props) => {
  return (
    <View style={styles.fill}>
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: 'red',
  },
});
