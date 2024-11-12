import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import CardDetails from './components/CardDetails';

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

  return (
    <View>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {selectedCard ? (
        <CardDetails selectedCard={selectedCard} />
      ) : (
        <CardList cards={cards} setSelectedCard={setSelectedCard} />
      )}
    </View>
  );
};

export default App;
