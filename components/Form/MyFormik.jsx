import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";

const MyFormik = ({ children, initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default MyFormik;

const styles = StyleSheet.create({});
