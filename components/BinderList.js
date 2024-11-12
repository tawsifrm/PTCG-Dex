import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput } from 'react-native';
import styles from './styles';

const BinderList = ({ binders, addBinder, removeBinder }) => {
  const [newBinderName, setNewBinderName] = useState('');

  const renderBinder = ({ item }) => (
    <View style={styles.binder}>
      <Text style={styles.binderText}>{item.name}</Text>
      <Button title="Remove" onPress={() => removeBinder(item.id)} />
    </View>
  );

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textInput}
        placeholder="New Binder Name"
        value={newBinderName}
        onChangeText={setNewBinderName}
      />
      <Button title="Add Binder" onPress={() => {
        addBinder(newBinderName);
        setNewBinderName('');
      }} />
      <FlatList
        data={binders}
        renderItem={renderBinder}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default BinderList;
