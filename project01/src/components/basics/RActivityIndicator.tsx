import React from 'react';
import {ActivityIndicator, View, Text, StyleSheet} from 'react-native';

export const RActivityIndicator = () => (
  <View style={styles.container}>
    <Text>Loading, please wait...</Text>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
