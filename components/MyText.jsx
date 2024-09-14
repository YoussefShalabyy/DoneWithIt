import { Text } from "react-native";
import React from "react";
import defaultStyles from "../constants/styles";

const MyText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default MyText;
