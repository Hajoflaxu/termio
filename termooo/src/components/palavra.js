import React, { useRef } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function Palavra() {
  const textInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInputChange = (index, text) => {
    if (text.length === 0 && index > 0) {
      textInputRefs[index - 1].current.focus();
    } else if (text.length > 0 && index < textInputRefs.length - 1) {
      textInputRefs[index + 1].current.focus();
    }
  };

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
});
