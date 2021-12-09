import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";

export const FoodMiniature = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png",
        }}
        style={{ width: 125, height: 125 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text>Pepperoni Pizza Pockets</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
