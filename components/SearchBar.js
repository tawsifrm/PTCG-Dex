import React from 'react';
import { TextInput } from 'react-native';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextInput
      placeholder="Search for a Pokemon"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
  );
};

export default SearchBar;
