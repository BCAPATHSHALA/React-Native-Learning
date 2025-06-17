import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export const RTouchableOpacity = () => {
  function alert(_arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <TouchableOpacity
      onPress={() => {
        alert('Tapped!');
      }}>
      <Text>Tap me</Text>
    </TouchableOpacity>
  );
};
