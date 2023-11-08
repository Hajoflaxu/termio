import { StyleSheet, View } from 'react-native';
import Palavra from '../components/palavra';

export default function Solo() {
    return (
        <View > 
            <Palavra ativacao={true} ></Palavra>
            <Palavra ativacao={false} ></Palavra>
            <Palavra></Palavra>
            <Palavra></Palavra>
            <Palavra></Palavra>
            <Palavra></Palavra>
        </View>
    )

}