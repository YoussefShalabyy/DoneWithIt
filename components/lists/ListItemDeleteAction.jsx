import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

function ListItemDeleteAction({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons name="trash-can" size={35} color={Colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
