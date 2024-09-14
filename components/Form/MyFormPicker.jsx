import React from "react";
import { useFormikContext } from "formik";
import MyPicker from "../MyPicker";
import ErrorMessage from "./ErrorMessage";

const MyFormPicker = ({ items, placeholder, name, width }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <MyPicker
        items={items}
        placeholder={placeholder}
        onSelectItem={(item) => setFieldValue(name, item)}
        value={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};

export default MyFormPicker;
