import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';

type ProfileScreenProps = StackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({navigation, route}: ProfileScreenProps) => {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ProfileScreen;
