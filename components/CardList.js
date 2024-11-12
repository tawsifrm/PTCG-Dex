import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';

const CardList = ({ cards, setSelectedCard }) => {
  const renderCard = ({ item }) => (
    <View style={styles.view}>
      <Text style={styles.text} onPress={() => setSelectedCard(item)}>{item.name}</Text>
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
