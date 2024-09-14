import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Colors from "@/constants/Colors";
import defaultStyles from "../constants/styles";
const MyTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <MaterialCommunityIcons name={icon} size={24} color="#505050" />}
      <TextInput
        style={[defaultStyles.text, { flex: 1 }]}
        {...otherProps}
        placeholderTextColor={Colors.medium}
   
      />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 15,
    backgroundColor: Colors.soft,
    borderRadius: 100,
    color: "black",
  },
});
