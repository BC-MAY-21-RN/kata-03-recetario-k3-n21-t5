import { Dimensions, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height : Dimensions.get("window").height,
        backgroundColor: '#202121',
    },
    SearchBar:{
        margin: 20,
        borderColor: '#f0f',
        borderWidth: 0,
    },
    title:{
        color: "#B71F65",
        fontSize: 25,
        fontWeight: "700",
        letterSpacing: 3,
        textTransform: "uppercase",
    },
})

export default styles