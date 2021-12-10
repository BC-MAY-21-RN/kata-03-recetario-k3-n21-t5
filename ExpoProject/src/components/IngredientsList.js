import React from 'react'
import { View, Text } from 'react-native'
import { Styles } from './IngredientsStyles'

export const IngredientsList = (receta) => {
    return(
        <View style={Styles.container}>
            <Text style={Styles.name}>{receta.nombre}</Text>
            <Text style={Styles.ing}>{receta.cantidad} {receta.unit}</Text>
        </View>
    )
}