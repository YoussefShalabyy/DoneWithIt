import { View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Seperator = () => {
  return (
    <View
      style={{ width: "100%", height: 1, backgroundColor: Colors.lightGray }}
    />
  );
};

export default Seperator;
