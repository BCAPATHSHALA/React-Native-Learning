import React from 'react';
import {Text, StyleSheet, Alert} from 'react-native';

export const RText = () => {
  return (
    <Text
      style={styles.text}
      numberOfLines={2}
      onPress={() => Alert.alert('Hello')}>
      This is an example of a Text component in React Native. Tap on me!
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Arial',
  },
});
