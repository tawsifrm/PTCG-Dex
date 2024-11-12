import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import CardDetails from './components/CardDetails';
import BinderList from './components/BinderList';
import styles from './components/styles';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [binders, setBinders] = useState([]);
  const [isBinderView, setIsBinderView] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchQuery}`)
        .then(response => response.json())
        .then(data => setCards(data.data))
        .catch(error => console.error(error));
    }
  }, [searchQuery]);

  const addBinder = (name) => {
    setBinders([...binders, { id: Date.now().toString(), name }]);
  };

  const removeBinder = (id) => {
    setBinders(binders.filter(binder => binder.id !== id));
  };

  return (
    <View style={styles.view}>
      <Button title={isBinderView ? "Search Cards" : "View Binders"} onPress={() => setIsBinderView(!isBinderView)} />
      {isBinderView ? (
        <BinderList binders={binders} addBinder={addBinder} removeBinder={removeBinder} />
      ) : (
        <>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          {selectedCard ? (
            <CardDetails selectedCard={selectedCard} />
          ) : (
            <CardList cards={cards} setSelectedCard={setSelectedCard} />
          )}
        </>
      )}
    </View>
  );
};

export default App;
