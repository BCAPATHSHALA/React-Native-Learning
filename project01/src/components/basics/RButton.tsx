import React from 'react';
import {Button, Alert} from 'react-native';

export const RButton = () => {
  const onPressHandler = () => {
    Alert.alert('Button Pressed');
  };

  return <Button title="Click me" color="#841584" onPress={onPressHandler} />;
};
