import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Palavra(variavel) {
  variavel = "ativado";
  if (variavel == "ativado") {
    return (
      <View style={styles.linha}>
        <View>
          <View style={styles.caixaAtivado}>
            <TextInput style={styles.textoAtivado} placeholder="T" maxLength={1}></TextInput>
          </View>
        </View>
        <View>
          <View style={styles.caixaAtivado}>
            <TextInput style={styles.textoAtivado} placeholder="E" maxLength={1}></TextInput>
          </View>
        </View>
        <View>
          <View style={styles.caixaAtivado}>
            <TextInput style={styles.textoAtivado} placeholder="R" maxLength={1}></TextInput>
          </View>
        </View>
        <View>
          <View style={styles.caixaAtivado}>
            <TextInput style={styles.textoAtivado} placeholder="M" maxLength={1}></TextInput>
          </View>
        </View>
        <View>
          <View style={styles.caixaAtivado}>
            <TextInput style={styles.textoAtivado} placeholder="O" maxLength={1}></TextInput>
          </View>
        </View>
      </View>
    );
  } 
  else {
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
  caixa: {
    backgroundColor: "#000",
    opacity: 0.45,
    height: 50,
    width: 50,
    borderRadius: 5,
    margin: 5,
  },
  texto: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
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
