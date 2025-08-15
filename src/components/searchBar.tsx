import React, {useState} from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from '../styles/searchBarStyle';
import {Button} from 'react-native-paper'

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({onSearch}: Props) {
  const [query, setQuery] = useState('');

  return(
    <View>
      <TextInput
      value={query}
      onChangeText={setQuery}
      placeholder="City or Zip"
      placeholderTextColor='#888'
      onSubmitEditing={() => onSearch(query.trim())}
      returnKeyType="search"
      style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={() => onSearch(query.trim())}>
        <Button mode="contained" elevation={5} buttonColor="#bfa608ff" >Search</Button>
      </TouchableOpacity>
    </View>
  );
}