/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";

import {
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import styles from "./styles";

export default class Login extends Component {
  state = {
    nomeusuario: "",
    loading: false
  };

  async componentDidMount() {
    try {
      const usuario = await AsyncStorage.getItem("@Toviajando:nomeusuaio");
      console.tron.log(usuario);
      if (!usuario) return null;
    } catch (error) { }
    // this.navegar();
  }

  navegar = () => {
    this.props.navigation.navigate("Home");
  };

  salvandoUsuario = async () => {
    const { nomeusuario } = this.state;

    if (nomeusuario.length === 0) return null;

    await AsyncStorage.setItem("@Toviajando:nomeusuaio", nomeusuario);

    this.navegar();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#38A1F3" />

        <Text style={styles.twitter}>Entrar no TO Viajando</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.nomeusuario}
          placeholder="ex: lucaspedronet"
          onChangeText={texto => this.setState({ nomeusuario: texto })}
          returnKeyType="send"
          onEndEditing={this.navegar}
        />
        <TouchableOpacity
          onPress={this.salvandoUsuario}
          style={styles.botaoEntrar}
        >
          {this.state.loading ? (
            <ActivityIndicator />
          ) : (
              <Text style={styles.textoBotao}>Entrar</Text>
            )}
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}