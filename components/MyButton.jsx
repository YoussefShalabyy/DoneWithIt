import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import useCustomFont from "../constants/Fonts";
import MyText from "./MyText";
const MyButton = ({ title, onPress, color = "primary" }) => {
  const loaded = useCustomFont();
  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: Colors[color] }]}
      onPress={onPress}
    >
      <MyText style={styles.text}>{title}</MyText>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: "100%",
    alignItems: "center",
    padding: 15,
    borderRadius: 100,
  },
  text: {
    color: Colors.white,
    textTransform: "uppercase",
  },
});
