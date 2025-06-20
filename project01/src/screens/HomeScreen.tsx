import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to My Profile"
        onPress={() => navigation.navigate('Profile', {name: 'Manoj Kumar'})}
      />
    </View>
  );
};

export default HomeScreen;
