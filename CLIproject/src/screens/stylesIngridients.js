import { Dimensions, StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    Container:{
        backgroundColor: '#202121',
        height : Dimensions.get("window").height 
    },
    IngredientsContainer:{
        paddingHorizontal: 20,
        padding: 15
    },
    Ingredients:{
        fontSize: 23,
        color: '#fff',
        paddingBottom: 1
    },
    serving:{
        fontSize:15,
        color:'#fff'
    },
    bold:{
        fontWeight:'bold'
    },
    ScrollViewCont:{
        width: "100%",
        paddingHorizontal: 20
    }
})