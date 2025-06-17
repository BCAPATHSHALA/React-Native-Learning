import React, {useState} from 'react';
import {TextInput, View, Button, Alert, StyleSheet} from 'react-native';

export const RTextInput = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    Alert.alert('You entered: ' + text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter text here"
      />
      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});
