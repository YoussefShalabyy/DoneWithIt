import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Icon = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
};

export default Icon;
