import React, { ReactElement } from 'react';
import { TouchableOpacity, FlatList, Text } from 'react-native';

import styles from '../../styles';

type ItemType = {
  name: string;
  destiny: string;
  id: number;
};

type ScreenType = {
  navigation: {
    navigate: (destiny: string) => void;
  };
};

const data: Array<ItemType> = [
  { name: 'Transitions', destiny: 'Transitions', id: 0 },
  { name: 'useTransition', destiny: 'UseTransition', id: 1 },
];

export default ({ navigation }: ScreenType): ReactElement => {
  const renderItem = ({ item }: { item: ItemType }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate(item.destiny);
      }}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const keyExtractor = (item: ItemType) => item.id.toString();

  return (
    <FlatList
      style={styles.flexOne}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      data={data}
    />
  );
};
