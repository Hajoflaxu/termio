import { View, StyleSheet } from "react-native-web";
import UniLetras from "./letraGess";


export default function Palavra() {
    return (
        <View style={styles.linha}>
            <UniLetras></UniLetras>
            <UniLetras></UniLetras>
            <UniLetras></UniLetras>
            <UniLetras></UniLetras>
            <UniLetras></UniLetras>
        </View>
    )
}
const styles = StyleSheet.create({
    linha: {
        flexDirection: 'row'
    }
})
