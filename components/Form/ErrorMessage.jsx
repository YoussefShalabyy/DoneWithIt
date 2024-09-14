import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyText from "../MyText";

const ErrorMessage = ({ error, touched = true }) => {
  if (!error || !touched) return null;
  return <MyText style={styles.error}>{error}</MyText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: { color: "red" },
});
