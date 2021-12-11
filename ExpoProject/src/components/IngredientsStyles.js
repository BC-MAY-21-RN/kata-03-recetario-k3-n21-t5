import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#444444',
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
