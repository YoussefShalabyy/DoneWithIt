import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyButton from "../../components/MyButton";
import Screen from "../../components/Screen";
import { router } from "expo-router";

const Register = () => {
  return (
    <Screen>
      <MyButton title={"welcome"} onPress={() => router.navigate("(tabs)")} />
    </Screen>
  );
};

export default Register;
