import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FoodMiniature } from "../food/FoodMiniature";

export const Trending = () => {
  return (
    <View>
      <Text>TRENDING</Text>
      <FoodMiniature />
    </View>
  );
};

const styles = StyleSheet.create({});
