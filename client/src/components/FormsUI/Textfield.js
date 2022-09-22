import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";
const Textfield = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);

  const configTextField = {
    ...otherProps,
    fullWidth: true,
    variant: "filled",
  };

  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }
  return <TextField {...configTextField} />;
};

export default Textfield;
