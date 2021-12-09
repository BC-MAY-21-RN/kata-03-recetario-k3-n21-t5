import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import {cardStyles} from './CardStyles.js';

export const Card = (props) => {
  const {receta, onClick} = props
  const { name, image } = receta;

  return (
    <TouchableOpacity 
    style={cardStyles.containerCard}
    onPress ={ () => onClick(receta)}
    >
      <View style={cardStyles.viewStyle}>
       <Image style={cardStyles.Image}
          source={{uri: image}}
        />
        <Text style={cardStyles.cardText}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

