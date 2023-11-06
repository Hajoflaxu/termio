import { StyleSheet, Text, View } from 'react-native';

export default function UniLetras() {
    return (
        <View style={styles.caixa}> 
            <Text style={styles.texto}>T</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    caixa: {
        backgroundColor: '#000000',
        opacity: 0.4,
        height: 58,
        width: 58,
        borderRadius: 5 ,
        margin: 2
    },
    texto: {
        textAlign: 'center',
        fontSize: 40,
    }
})