import React from 'react';
import { View, ScrollView, Text} from 'react-native';
import {FoodTile} from "../components/FoodTile";
import { IngredientsList } from '../components/IngredientsList';
import { Styles } from './stylesIngridients';

export const Ingredientes = (props) => {
  const { route: {params: receta} } = props;
  const {name, porciones, ingredientes, image, tag, description} = receta;
  const {navigation} = props

  const renderIngredients = ingredientes?.map((ingredient, index)=>{
    return <IngredientsList key={`Ingredient-${index}`} nombre={ingredient.nombre} cantidad={ingredient.cantidad} unit={ingredient.unit}/>
  })

  const CloseScreen = () => {
    navigation.goBack()
  }

  return (
    <View style={Styles.Container}>
      <FoodTile image={image} desc={description} name={name} onClick={CloseScreen}/>
      <View style={Styles.IngredientsContainer}>
        <Text style={Styles.Ingredients}>Ingredientes</Text>
        <Text style={Styles.serving}>para <Text style={Styles.bold}>{porciones}</Text> porciones</Text>
      </View>
      <ScrollView style={Styles.ScrollViewCont}>
        {renderIngredients}    
      </ScrollView>
    </View>
  )
};

