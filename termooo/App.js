import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Solo from './src/screens/solo';


export default function App() {
    return (
        <View style={styles.container}>
            <Solo />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#825e8a', /** */
        alignItems: 'center',
        justifyContent: 'center',
    }
});