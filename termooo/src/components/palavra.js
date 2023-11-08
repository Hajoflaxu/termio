import React, { useRef } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Palavra(props) {
  const textInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  ativacao = props.ativacao; 
  const handleInputChange = (index, text) => {
    if (text.length === 0 && index > 0) {
      textInputRefs[index - 1].current.focus();
    } else if (text.length > 0 && index < textInputRefs.length - 1) {
      textInputRefs[index + 1].current.focus();
    }
  };
  if(ativacao == true) {
    return (
      <View style={styles.linha}>
        {textInputRefs.map((inputRef, index) => (
          <View key={index}>
            <View style={styles.caixaAtivado}>
              <TextInput
                style={styles.textoAtivado}
                placeholder="T"
                maxLength={1}
                onChangeText={(text) => handleInputChange(index, text)}
                ref={inputRef}
              />
            </View>
          </View>
        ))}
      </View>
    );
  }
  else{
    return (
      <View style={styles.linha}>
        <View>
          <View style={styles.caixa}>
            <Text style={styles.texto} placeholder="T"></Text>
          </View>
        </View>
        <View>
          <View style={styles.caixa}>
            <Text style={styles.texto} placeholder="E"></Text>
          </View>
        </View>
        <View>
          <View style={styles.caixa}>
            <Text style={styles.texto} placeholder="R"></Text>
          </View>
        </View>
        <View>
          <View style={styles.caixa}>
            <Text style={styles.texto} placeholder="M"></Text>
          </View>
        </View>
        <View>
          <View style={styles.caixa}>
            <Text style={styles.texto} placeholder="O"></Text>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  linha: {
    flexDirection: "row",
  },
  caixaAtivado: {
    borderWidth: 3.5,
    borderColor: "#4a354f",
    height: 50,
    width: 50,
    borderRadius: 5,
    margin: 5,
  },
  textoAtivado: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
  },
  caixa: {
    backgroundColor: "#000",
    opacity: 0.45,
    height: 50,
    width: 50,
    borderRadius: 5,
    margin: 5,
  },

});
