import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { Styles } from "./FoodTileStyles";
export const FoodTile = (receta) => {
    const {onClick} = receta

    return (
        <View style={Styles.Container}>
            <View style={Styles.IconContainer}>
                <TouchableOpacity onPress ={ () => onClick(receta)}>
                    <Icon name="close-outline" type='ionicon' color='#fff' size={40}/>
                </TouchableOpacity>
            <View style={Styles.IconHeartShare}>
                <TouchableOpacity style={Styles.IconShare}>
                    <Icon name="share-outline" type='ionicon' color='#fff' size={30}/>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.IconHeart}>
                    <Icon name="heart-outline" type='ionicon' color='#fff' size={30}/>
                </TouchableOpacity>
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

