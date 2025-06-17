import React from 'react';
import {FlatList, View, Text} from 'react-native';

const data = [
  {id: '1', content: 'Item 1'},
  {id: '2', content: 'Item 2'},
  {id: '3', content: 'Item 3'},
  {id: '4', content: 'Item 4'},
  {id: '5', content: 'Item 5'},
  {id: '6', content: 'Item 6'},
];

type Item = { id: string; content: string };

const renderItem = ({item}: { item: Item }) => (
  <View>
    <Text>{item.content}</Text>
  </View>
);

export const RFlatList = () => (
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
);
