import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const RImage = () => {
  return (
    <View style={styles.container}>
      {/* Through URI */}
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.image}
      />
      {/* Through local */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
