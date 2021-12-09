import React, {useState, useEffect} from "react";
import {Text, SafeAreaView, ScrollView } from "react-native";
import styles from "./stylesHome";
import info from "../database/info.json";
import { SearchBars } from "../components/SearchBars";
import { Card } from "../components/Card";

export const Home = (props) => {
  const {navigation} = props
  const [state, setState] = useState('')
  const [recetario, setRecetario] = useState(info)
  const [Trending, Render] = useState(null)

  const onSelectedRecipe = (receta) =>{
    //updateToRecent(receta)
    navigation.navigate("IngredientesScreen", receta)
  }

  useEffect(()=>{
    const temp = recetario?.map((receta, index)=>
    {
      return <Card key={`info-${index}`} receta={receta} onClick={onSelectedRecipe}/>
    })
    Render(temp)
  },[state])

  return (
    <SafeAreaView  style={styles.container}>
      <SearchBars style={styles.SearchBar}/>
      <ScrollView>
        <Text style={styles.title}> Trending</Text>
        <ScrollView horizontal>{Trending}</ScrollView>
        <Text style={styles.title}> Recent</Text>
        <ScrollView horizontal></ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

