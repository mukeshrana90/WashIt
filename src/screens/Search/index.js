import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { CONTAINER } from "../../constants"; 

const Search = () => {
  return (
    <SafeAreaView style={{...CONTAINER.main}}>
      <Text>Search</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
})
export default Search;
