import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";


export const SearchBars = () => {
  return <SearchBar 
  round
  containerStyle={styles.container}
  placeholder="What do you want to eat?" />;
};

const styles = StyleSheet.create({
  container:{
    marginTop:40,
    backgroundColor: "#202121",
    borderColor:"#202121",
    paddingHorizontal: 15,
  }
})

