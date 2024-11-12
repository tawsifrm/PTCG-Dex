import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const CardDetails = ({ selectedCard }) => {
  if (!selectedCard) {
    return null;
  }

  return (
    <View style={styles.view}>
      <Image source={{ uri: selectedCard.images.large }} style={styles.image} />
      <Text style={styles.text}>Name: {selectedCard.name}</Text>
      <Text style={styles.text}>Supertype: {selectedCard.supertype}</Text>
      <Text style={styles.text}>Subtype: {selectedCard.subtypes.join(', ')}</Text>
      <Text style={styles.text}>HP: {selectedCard.hp ? selectedCard.hp : 'N/A'}</Text>
      <Text style={styles.text}>Types: {selectedCard.types.join(', ')}</Text>
      <Text style={styles.text}>Weaknesses: {selectedCard.weaknesses ? selectedCard.weaknesses.map(w => w.type).join(', ') : 'N/A'}</Text>
      <Text style={styles.text}>Resistances: {selectedCard.resistances ? selectedCard.resistances.map(r => r.type).join(', ') : 'N/A'}</Text>
      <Text style={styles.text}>Retreat Cost: {selectedCard.retreatCost ? selectedCard.retreatCost.join(', ') : 'N/A'}</Text>
    </View>
  );
};

export default CardDetails;
