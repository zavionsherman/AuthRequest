import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  InputLabel,
  createTheme,
  ThemeProvider,
  MenuItem,
  Snackbar,
  Select,
} from "@mui/material";

import PriorAuth from "./PriorAuth";
import MuiAlert from "@mui/material/Alert";
import { useEffect } from "react";

import inputs from "../inputs";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewCheck = (props) => {
  const [eligible, setEligible] = useState(false);
  const [open, setOpen] = useState(false);
  const [notEligible, setNotEligible] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    DateOfBirth: "",
    ServiceBegin: "",
    Payor: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const acknowledge = location?.state?.acknowledge || false;

  useEffect(() => {
    if (!acknowledge) {
      navigate("/");
    }
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // const validationSchema = yup.object({
  //   firstName: yup
  //     .string("Enter your first name")
  //     .required("First name is required"),
  //   lastName: yup
  //     .string("Enter your last name")
  //     .required("Last name is required"),
  //   DateOfBirth: yup.date("Enter Date of Birth number"),
  //   ServiceBegin: yup
  //     .date("Enter service begin date")
  //     .required("Service begin date is required"),
  //   Payor: yup.string("Enter Payor").required("Payor is required"),
  // });
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     DateOfBirth: "",
  //     ServiceBegin: "",
  //     Payor: "",
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //     const response = true;
  //     if (response) {
  //       setTimeout(() => {
  //         setEligible(true);
  //         setOpen(true);
  //       }, 1500);
  //     } else {
  //       setTimeout(() => {
  //         setEligible(false);
  //         setNotEligible(true);
  //       }, 1500);
  //     }
  //   },
  // });

  const theme = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: "#db3131",
            "&$error": {
              color: "#db3131",
            },
          },
        },
      },
    },
  });

  const FigureOutFields = (input) => {
    console.log(input);
    if (input.materialUIcomponent === "TextField") {
      console.log(true);
      return <TextField {...input} />;
    }
    if (input.materialUIcomponent === "Select") {
      return (
        <>
          <InputLabel id={input.label}>{input.label}</InputLabel>
          <Select {...input}>
            {input.options.map((option) => (
              <MenuItem id={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </>
      );
    }
  };

  return (
    <main>
      <div className="container mx-auto my-5">
        <div className="text-3xl font-bold text-center my-4"></div>
        <div className="text-lg font-bold text-center mb-4">
          Prior Authorization Form
        </div>
        <ThemeProvider theme={theme}>
          <div className="bg p-5">
            <form
              // onSubmit={formik.handleSubmit}
              className="my-5 p-4 md:p-7 form-bg "
            >
              <div className="mx-auto">
                <div className="font-semibold text-sm mb-2">
                  Member Details:
                </div>
                <div className="text-gray-400 text-xs">
                  Please enter member details to check insurance eligibility.
                </div>
                <div className="mb-2">
                  <span className="text-rose-600 text-xs">
                    * fields are required
                  </span>
                </div>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2 }}>
                  {inputs.map((input) => (
                    <Grid item xs={6} sm={4} md={2} key={input.id}>
                      <FormControl>
                        {input.materialUIcomponent === "TextField" ? (
                          <TextField {...input} />
                        ) : input.materialUIcomponent === "Select" ? (
                          <>
                            <InputLabel id={input.label}>
                              {input.label}
                            </InputLabel>
                            <Select {...input}>
                              {input.options.map((option) => (
                                <MenuItem id={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
                            </Select>
                          </>
                        ) : (
                          ""
                        )}
                      </FormControl>
                    </Grid>
                  ))}
                </Grid>

                <div className="mx-auto mt-5 flex justify-center">
                  <button
                    className="btn primary"
                    type="submit"
                    style={{ marginRight: "10px" }}
                  >
                    Check Eligibility{" "}
                  </button>
                </div>
              </div>
            </form>
            {eligible ? <PriorAuth /> : ""}
          </div>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Patient is eligible!
            </Alert>
          </Snackbar>
          <Snackbar
            open={notEligible}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="warning"
              sx={{ width: "100%" }}
            >
              Patient is not eligible!
            </Alert>
          </Snackbar>
        </ThemeProvider>
      </div>
    </main>
  );
};

export default NewCheck;
