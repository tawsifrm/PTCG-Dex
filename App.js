import React, { useState, useEffect } from 'react';
import { TextInput, FlatList, View, Text, Image } from 'react-native';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchQuery}`)
        .then(response => response.json())
        .then(data => setCards(data.data))
        .catch(error => console.error(error));
    }
  }, [searchQuery]);

  const renderCard = ({ item }) => (
    <View>
      <Text onPress={() => setSelectedCard(item)}>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <TextInput
        placeholder="Search for a Pokemon"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {selectedCard ? (
        <View>
          <Image source={{ uri: selectedCard.images.large }} style={{ width: 200, height: 300 }} />
          <Text>Name: {selectedCard.name}</Text>
          <Text>Supertype: {selectedCard.supertype}</Text>
          <Text>Subtype: {selectedCard.subtypes.join(', ')}</Text>
          <Text>HP: {selectedCard.hp}</Text>
          <Text>Types: {selectedCard.types.join(', ')}</Text>
          <Text>Weaknesses: {selectedCard.weaknesses.map(w => w.type).join(', ')}</Text>
          <Text>Resistances: {selectedCard.resistances.map(r => r.type).join(', ')}</Text>
          <Text>Retreat Cost: {selectedCard.retreatCost.join(', ')}</Text>
        </View>
      ) : (
        <FlatList
          data={cards}
          renderItem={renderCard}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default App;
