import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Recent } from "../components/Recent";
import { SearchBars } from "../components/SearchBars";
import { Trending } from "../components/Trending";

export const Home = () => {
  return (
    <View>
      <SearchBars />
      <Trending />
      <Recent />
    </View>
  );
};

const styles = StyleSheet.create({});
