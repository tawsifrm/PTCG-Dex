import React from 'react';
import { View, Text, Image } from 'react-native';

const CardDetails = ({ selectedCard }) => {
  if (!selectedCard) {
    return null;
  }

  return (
    <View>
      <Image source={{ uri: selectedCard.images.large }} style={{ width: 200, height: 300 }} />
      <Text>Name: {selectedCard.name}</Text>
      <Text>Supertype: {selectedCard.supertype}</Text>
      <Text>Subtype: {selectedCard.subtypes.join(', ')}</Text>
      <Text>HP: {selectedCard.hp ? selectedCard.hp : 'N/A'}</Text>
      <Text>Types: {selectedCard.types.join(', ')}</Text>
      <Text>Weaknesses: {selectedCard.weaknesses ? selectedCard.weaknesses.map(w => w.type).join(', ') : 'N/A'}</Text>
      <Text>Resistances: {selectedCard.resistances ? selectedCard.resistances.map(r => r.type).join(', ') : 'N/A'}</Text>
      <Text>Retreat Cost: {selectedCard.retreatCost ? selectedCard.retreatCost.join(', ') : 'N/A'}</Text>
    </View>
  );
};

export default CardDetails;
