import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyTextInput from "../MyTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const MyFormField = ({ name, width, ...otherProps }) => {
  const { handleChange, handleBlur, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <MyTextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        width={width}
        {...otherProps}
        autoCapitalize="none"
      />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};

export default MyFormField;

const styles = StyleSheet.create({});
