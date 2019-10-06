import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    alignSelf: "stretch",
    borderRadius: 5,
    height: 54,
    paddingHorizontal: 15
  },
  botaoEntrar: {
    height: 54,
    backgroundColor: "#38A1F3",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginTop: 10
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF"
  },
  twitter: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C2022",
    marginBottom: 40,
    marginTop: 21.3
  }
});

export default styles;