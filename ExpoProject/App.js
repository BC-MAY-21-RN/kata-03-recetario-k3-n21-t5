import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from "./src/screens/Home";
import { Ingredientes } from "./src/screens/Ingredientes";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Component = () => {
  return (
    <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={Home}/>
        <Stack.Screen name="IngredientesScreen" component={Ingredientes}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Component />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#808080",
  },
});
