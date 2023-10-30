import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UniLetras from './src/components/uni_letra';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <UniLetras></UniLetras>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#403a35', /** */
        alignItems: 'center',
        justifyContent: 'center',
    }
});
