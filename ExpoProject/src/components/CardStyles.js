import { StyleSheet } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'

export const cardStyles = StyleSheet.create({
  containerCard:{
    flex: 1,
    width: 100,
    marginRight: 25,
    marginBottom: 20,
  },
  viewStyle:{
    marginRight: 5,
    marginLeft: 5
  },
  Image:{
    width: 110,
    height: 110,
    borderRadius: 12,
    
  },
  cardText:{
    textAlign: 'center',
    fontSize: 20,
    color: '#fff'
  }
})