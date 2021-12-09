import React from 'react';
import { View, ScrollView, Text,Image, StyleSheet } from 'react-native';
//import {styles} from './stylesDtScreen.js';
//import {DSHero, IngredientItemList} from '../../components/index.js';

export const Ingredientes = (props) => {
  const { route: {params: receta} } = props;
  const {name, servings, ingredientes, image, tag} = receta;

  const renderIngredients = ingredientes?.map((ingredient, index)=>{
    
  })

  return (
    <View >
      
      <View >
        <Text >Ingredients</Text>
        <Text ></Text>
      </View>
      <ScrollView >
        
      </ScrollView>
    </View>
  )
};

