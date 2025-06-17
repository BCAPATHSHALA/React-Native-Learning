import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

export const RScrollView = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Item 1</Text>
      <Text style={styles.text}>Item 2</Text>
      <Text style={styles.text}>Item 3</Text>
      <Text style={styles.text}>Item 4</Text>
      <Text style={styles.text}>Item 5</Text>
      <Text style={styles.text}>Item 6</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Arial',
  },
});
