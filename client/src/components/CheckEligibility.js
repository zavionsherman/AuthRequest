import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik, Formik, Form, Field } from "formik";
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
  Stepper,
  Step,
  StepLabel,
  Box,
} from "@mui/material";
import PriorAuth from "./PriorAuth";
import MuiAlert from "@mui/material/Alert";
import { useEffect } from "react";
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
    MuiStepIcon: {
      styleOverrides: {
        root: {
          // "&$completed": {
          //   color: "#8cc638",
          // },
          // "&$active": {
          //   color: "#8cc638",
          // },
          active: {
            color: "#8cc638",
          },
          completed: {
            color: "#8cc638",
          },
        },
      },
    },
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const steps = [
  {
    label: "Patience and Insurance",
  },
  {
    label: "Check Eligibility",
  },
  {
    label: "Referral Source",
  },
  {
    label: "Submitted",
  },
];

const CheckEligibility = (props) => {
  const [eligible, setEligible] = useState(false);
  const [open, setOpen] = useState(false);
  const [notEligible, setNotEligible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const acknowledge = location?.state?.acknowledge || false;

  const VerticalStepper = () => {
    return (
      <Box sx={{ maxWidth: 400, position: "fixed" }}>
        <Stepper
          sx={{ color: "#8cc638" }}
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
  const initialValues = {
    firstName: "",
    lastName: "",
    DateOfBirth: "",
    ServiceBegin: "",
    Payor: "",
  };
  const validationSchema = yup.object().shape({
    firstName: yup
      .string("Enter your first name")
      .required("First name is required"),
    lastName: yup
      .string("Enter your last name")
      .required("Last name is required"),
    DateOfBirth: yup
      .date("Enter Date of Birth number")
      .required("Date of Birth is required"),
    ServiceBegin: yup
      .date("Enter service begin date")
      .required("Service begin date is required"),
    Payor: yup.string("Enter Payor").required("Payor is required"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      const response = true;
      if (response) {
        setTimeout(() => {
          setEligible(true);
          setOpen(true);
          handleNext();
          handleNext();
        }, 1500);
      } else {
        setTimeout(() => {
          setEligible(false);
          setNotEligible(true);
        }, 1500);
      }
    },
  });

  return (
    <main className="mt-12">
      <div className="container mx-auto my-5">
        <div className="text-3xl font-bold text-center my-4"></div>
        <div className="text-lg font-bold text-center mb-8">
          Prior Authorization Form
        </div>
        <ThemeProvider theme={theme}>
          <div className="flex justify-between">
            <div className="mr-48">
              <VerticalStepper />
            </div>
            <div className="bg p-5">
              <Formik
                initialValues={initialValues}
                onSubmit={(values, formikHelpers) => {
                  console.log(values);
                  formikHelpers.resetForm();
                }}
                validationSchema={validationSchema}
              >
                {({ errors, isValid, touched, dirty }) => (
                  <div className="my-2 p-4 md:p-7 form-bg">
                    <Form
                      onSubmit={formik.handleSubmit}
                      className="my-2 p-4 md:p-7 form-bg "
                    >
                      <div className="mx-auto">
                        <div className="font-semibold text-sm mb-2">
                          Member Details:
                        </div>
                        <div className="text-gray-400 text-xs">
                          Please enter member details to check insurance
                          eligibility.
                        </div>
                        <div className="mb-2">
                          <span className="text-rose-600 text-xs">
                            * fields are required
                          </span>
                        </div>
                        <Grid
                          container
                          rowSpacing={4}
                          columnSpacing={{ xs: 1, sm: 2 }}
                        >
                          <Grid item xs={6} sm={4} md={2}>
                            <FormControl>
                              <div className="md:w-full">
                                <Field
                                  as={TextField}
                                  label="First Name:"
                                  variant="filled"
                                  size="small"
                                  id="firstName"
                                  name="firstName"
                                  disabled={eligible}
                                  value={formik.values.firstName}
                                  onChange={formik.handleChange}
                                  InputLabelProps={{
                                    required: true,
                                  }}
                                  error={
                                    Boolean(formik.touched.firstName) &&
                                    Boolean(formik.errors.firstName)
                                  }
                                  helperText={
                                    formik.touched.firstName &&
                                    formik.errors.firstName &&
                                    String(formik.errors.firstName)
                                  }
                                />
                              </div>
                            </FormControl>
                          </Grid>

                          <Grid item xs={6} sm={4} md={2}>
                            <FormControl>
                              <div className="md:w-full">
                                <Field
                                  as={TextField}
                                  label="Last Name:"
                                  variant="filled"
                                  size="small"
                                  id="lastName"
                                  name="lastName"
                                  disabled={eligible}
                                  value={formik.values.lastName}
                                  onChange={formik.handleChange}
                                  InputLabelProps={{
                                    required: true,
                                  }}
                                  error={
                                    formik.touched.lastName &&
                                    Boolean(formik.errors.lastName)
                                  }
                                  helperText={
                                    formik.touched.lastName &&
                                    formik.errors.lastName
                                  }
                                />
                              </div>
                            </FormControl>
                          </Grid>
                          <Grid item>
                            <FormControl>
                              <Field
                                as={TextField}
                                label="Date of Birth:"
                                variant="filled"
                                size="small"
                                id="DateOfBirth"
                                name="DateOfBirth"
                                disabled={eligible}
                                type="date"
                                value={formik.values.DateOfBirth}
                                InputLabelProps={{
                                  shrink: true,
                                  required: true,
                                }}
                                onChange={formik.handleChange}
                                error={
                                  formik.touched.DateOfBirth &&
                                  Boolean(formik.errors.DateOfBirth)
                                }
                                helperText={
                                  formik.touched.DateOfBirth &&
                                  formik.errors.DateOfBirth
                                }
                                //  required
                              />
                            </FormControl>
                          </Grid>
                          <Grid item>
                            <FormControl>
                              <Field
                                as={TextField}
                                label="Service Begin:"
                                variant="filled"
                                size="small"
                                id="ServiceBegin"
                                name="ServiceBegin"
                                type="date"
                                disabled={eligible}
                                InputLabelProps={{
                                  shrink: true,
                                  required: true,
                                }}
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
                                //  required
                              />
                            </FormControl>
                          </Grid>
                          <Grid item>
                            <FormControl
                              variant="filled"
                              size="small"
                              sx={{ width: 300 }}
                              //required
                            >
                              <InputLabel id="Payor">Payor</InputLabel>
                              <Select
                                labelId="Payor"
                                id="Payor"
                                name="Payor"
                                value={formik.values.Payor}
                                label="Payor"
                                disabled={eligible}
                                onChange={formik.handleChange}
                                error={
                                  formik.touched.Payor &&
                                  Boolean(formik.errors.Payor)
                                }
                              >
                                <MenuItem value="Humana">Humana</MenuItem>
                                <MenuItem value="UHC">UHC</MenuItem>
                                <MenuItem value="Cetna">Cetna</MenuItem>
                              </Select>
                              <FormHelperText>
                                * If payor is not in the list, we are not
                                contracted with them.
                              </FormHelperText>
                              <FormHelperText>
                                <span className="text-red-500">
                                  {formik.touched.Payor && formik.errors.Payor}
                                </span>
                              </FormHelperText>
                            </FormControl>
                          </Grid>
                        </Grid>

                        <div className="mx-auto mt-5 flex justify-center">
                          <button
                            className="btn primary disabled:opacity-25"
                            type="submit"
                            style={{ marginRight: "10px" }}
                            disabled={eligible ? true : false}
                          >
                            Check Eligibility{" "}
                          </button>
                        </div>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>

              {eligible ? <PriorAuth handleNext={handleNext} /> : ""}
            </div>
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
