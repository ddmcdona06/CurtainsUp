import React, {useState} from "react";
import { View, TouchableOpacity } from "react-native";
import styles from '../styles/searchBarStyle';
import {Button, Searchbar} from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBars({onSearch}: Props) {
  const [query, setQuery] = useState('');

  return(
    <View style={styles.container} >
      <Searchbar
      mode="bar"
      value={query}
      onChangeText={setQuery}
      placeholder="City or Zip"
      placeholderTextColor='#888'
      onSubmitEditing={() => onSearch(query.trim())}
      returnKeyType="search"
      elevation={5}
      style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={() => onSearch(query.trim())}>
        {/* <Button
        mode="contained-tonal"
        elevation={5}
        buttonColor="#bfa608ff"
        >Theatre Search</Button> */}
      </TouchableOpacity>
    </View>
  );
}