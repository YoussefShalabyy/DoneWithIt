import React from "react";
import MyButton from "../MyButton";
import { useFormikContext } from "formik";

const SubmitButton = ({title}) => {
  const { handleSubmit } = useFormikContext();
  return <MyButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
