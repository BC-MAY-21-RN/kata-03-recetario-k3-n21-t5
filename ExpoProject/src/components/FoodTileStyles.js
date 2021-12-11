import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    Container:{
        height:"40%"
    },
    IconContainer:{
        width:"100%",
        justifyContent:'space-between',
        padding: 20,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1
    },
    IconHeartShare:{
        display: 'flex',
        flexDirection: 'row',
        zIndex: 1
    },
    IconHeart:{
        paddingTop: 12
    },
    IconShare:{
        padding: 10
    },
    Title:{
        fontSize: 30,
        fontWeight: '700',
        color: '#fff'
    },
    Desc:{
        fontSize:15,
        color:'#fff'
    },
    imageStyle:{
        width: "100%",
        height: "100%",
        opacity: 0.4
    },
    TitleContainer:{
        position: 'absolute',
        padding:20,
        bottom: 0
    }

});
