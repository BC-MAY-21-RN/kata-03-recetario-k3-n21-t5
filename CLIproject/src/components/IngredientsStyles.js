import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    contianer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginTop: 4
    },
    name:{
        paddingVertical: 10,
        color: '#fff',
        fontSize: 13,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    ing:{
        paddingVertical: 10,
        color: '#fff',
        fontSize: 13,
    }
})