import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={[style, { flex: 1 }]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
});
