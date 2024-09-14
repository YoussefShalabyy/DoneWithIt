import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TabBarButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name="plus-circle"
        color={Colors.white}
        size={50}
      />
    </TouchableOpacity>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Colors.white,
  },
});
