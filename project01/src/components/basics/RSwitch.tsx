import React, {useState} from 'react';
import {View, Switch, Text} from 'react-native';

export const RSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <Text>Enable Feature:</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
