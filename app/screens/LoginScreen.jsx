import { Image, StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import * as yup from "yup";
import Screen from "@/components/Screen";
import {
  MyFormField,
  MyFormik,
  SubmitButton,
  ErrorMessage,
} from "@/components/Form";
import authApi from "../api/auth";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../../auth/context";
import * as SecureStore from "expo-secure-store";
import authStorage from "../../auth/authStorage";
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});
const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const login = async ({ email, password }) => {
    const response = await authApi.login(email, password);
    console.log(response.data);

    if (!response.ok) return setLoginFailed(true);

    setLoginFailed(false);

    const user = jwtDecode(response.data);
    authContext.setUser(user);
    authStorage.store(response.data);
  };
  return (
    <Screen>
      <Image
        source={require("../../assets/images/logo-red.png")}
        style={styles.logo}
      />

      <MyFormik
        initialValues={{ email: "", password: "" }}
        onSubmit={login}
        validationSchema={validationSchema}
      >
        <View style={styles.inputContainer}>
          {loginFailed && <ErrorMessage error="Invalid email or password" />}
          <MyFormField
            placeholder="Username"
            icon="account-outline"
            name="email"
          />
          <MyFormField
            placeholder="Password"
            icon="lock-outline"
            name="password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </View>
      </MyFormik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  inputContainer: {
    gap: 20,
    padding: 15,
  },
});
