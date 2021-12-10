import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { Styles } from "./FoodTileStyles";
import { CommonActions } from '@react-navigation/native';

export const FoodTile = (receta) => {
    const {onClick} = receta

    return (
        <View style={Styles.Container}>
            <View style={Styles.IconContainer}>
                <TouchableOpacity onPress ={ () => onClick(receta)}>
                    <Icon name="close-outline" type='ionicon' color='#fff' size={40}/>
                </TouchableOpacity>
                
                <View>
                    <Icon name="share-outline" type='ionicon' color='#fff' size={30}/>
                    <Icon name="heart-outline" type='ionicon' color='#fff' size={30}/>
                </View>
            </View>
            <Image source={{uri: receta.image}} style={Styles.imageStyle}/>
            <View style={Styles.TitleContainer}>
                <Text style={Styles.Title}>{receta.name}</Text>
                <Text style={Styles.Desc}>{receta.desc}</Text>
            </View>
            
        </View>
    );
};

