import { Text, View } from "react-native";
import React from "react";
import indexStyle from "../styles/indexStyle";
import SearchBar from "../components/searchBar";

export default function Index() {
  return (
    <View
      style={indexStyle.center}
    >
      <SearchBar onSearch={()=> 'placeholder for search function'}/>
    </View>
  );
}
