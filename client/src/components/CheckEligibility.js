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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CheckEligibility = (props) => {
  const [eligible, setEligible] = useState(true);
  const [open, setOpen] = useState(false);
  const [notEligible, setNotEligible] = useState(false);

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

  const validationSchema = yup.object({
    firstName: yup
      .string("Enter your first name")
      .required("First name is required"),
    lastName: yup
      .string("Enter your last name")
      .required("Last name is required"),
    DateOfBirth: yup.date("Enter Date of Birth number"),
    ServiceBegin: yup
      .date("Enter service begin date")
      .required("Service begin date is required"),
    Payor: yup.string("Enter Payor").required("Payor is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      DateOfBirth: "",
      ServiceBegin: "",
      Payor: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      const response = true;
      if (response) {
        setTimeout(() => {
          setEligible(true);
          setOpen(true);
        }, 1500);
      } else {
        setTimeout(() => {
          setEligible(false);
          setNotEligible(true);
        }, 1500);
      }
    },
  });

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
              onSubmit={formik.handleSubmit}
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
                  <Grid item xs={6} sm={4} md={2}>
                    <FormControl>
                      <div className="md:w-full">
                        <TextField
                          label="First Name:"
                          variant="filled"
                          size="small"
                          id="firstName"
                          name="firstName"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.firstName &&
                            Boolean(formik.errors.firstName)
                          }
                          helperText={
                            formik.touched.firstName && formik.errors.firstName
                          }
                          required
                        />
                      </div>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6} sm={4} md={2}>
                    <FormControl>
                      <div className="md:w-full">
                        <TextField
                          label="Last Name:"
                          variant="filled"
                          size="small"
                          id="lastName"
                          name="lastName"
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.lastName &&
                            Boolean(formik.errors.lastName)
                          }
                          helperText={
                            formik.touched.lastName && formik.errors.lastName
                          }
                          required
                        />
                      </div>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <TextField
                        label="Date of Birth:"
                        variant="filled"
                        size="small"
                        id="DateOfBirth"
                        name="DateOfBirth"
                        type="date"
                        value={formik.values.DateOfBirth}
                        InputLabelProps={{ shrink: true, required: true }}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.DateOfBirth &&
                          Boolean(formik.errors.DateOfBirth)
                        }
                        helperText={
                          formik.touched.DateOfBirth &&
                          formik.errors.DateOfBirth
                        }
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <TextField
                        label="Service Begin:"
                        variant="filled"
                        size="small"
                        id="ServiceBegin"
                        name="ServiceBegin"
                        type="date"
                        InputLabelProps={{ shrink: true, required: true }}
                        value={formik.values.ServiceBegin}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.ServiceBegin &&
                          Boolean(formik.errors.ServiceBegin)
                        }
                        helperText={
                          formik.touched.ServiceBegin &&
                          formik.errors.ServiceBegin
                        }
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl
                      variant="filled"
                      size="small"
                      sx={{ width: 300 }}
                      required
                    >
                      <InputLabel id="Payor">Payor</InputLabel>
                      <Select
                        labelId="Payor"
                        id="Payor"
                        name="Payor"
                        value={formik.values.Payor}
                        label="Payor"
                        onChange={formik.handleChange}
                        inputlabelprops={{ shrink: true, required: true }}
                        error={
                          formik.touched.Payor && Boolean(formik.errors.Payor)
                        }
                        helpertext={formik.touched.Payor && formik.errors.Payor}
                      >
                        <MenuItem value="Humana">Humana</MenuItem>
                        <MenuItem value="UHC">UHC</MenuItem>
                        <MenuItem value="Cetna">Cetna</MenuItem>
                      </Select>
                      <FormHelperText>
                        * If payor is not in the list, we are not contracted
                        with them.
                      </FormHelperText>
                    </FormControl>
                  </Grid>
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

export default CheckEligibility;
