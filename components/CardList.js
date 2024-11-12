import React from 'react';
import { FlatList, View, Text } from 'react-native';

const CardList = ({ cards, setSelectedCard }) => {
  const renderCard = ({ item }) => (
    <View>
      <Text onPress={() => setSelectedCard(item)}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={cards}
      renderItem={renderCard}
      keyExtractor={item => item.id}
    />
  );
};

export default CardList;
