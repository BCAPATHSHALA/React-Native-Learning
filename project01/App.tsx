import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const YourApp = () => {
  return (
    <View style={styles.container}>
      <Text>Try editing me! 🎉</Text>
    </View>
  );
};

export default YourApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
