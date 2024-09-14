import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MyText from "./MyText";
import Colors from "@/constants/Colors";

const PickerItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MyText>{title}</MyText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.light,
    margin: 10,
    borderRadius: 100,
  },
});
