import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleDelete = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((item) => item !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleDelete}
      />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
