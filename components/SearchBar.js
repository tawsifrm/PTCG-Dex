import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="Search for a Pokemon"
      placeholderTextColor="#888888"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
  );
};

export default SearchBar;
