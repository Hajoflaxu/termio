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
        backgroundColor: '#292522',
        height: 50,
        width: 50,
        borderRadius: 10,
    },
    texto: {
        textAlign: 'center',
        fontSize: 40,
    }
})