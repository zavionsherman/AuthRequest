import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  InputLabel,
  Button,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const CheckEligibility = () => {
  const validationSchema = yup.object({
    firstName: yup
      .string("Enter your first name")
      .required("First name is required"),
    lastName: yup
      .string("Enter your last name")
      .required("Last name is required"),
    SSN: yup.number("Enter SSN number"),
    DateOfBirth: yup.number("Enter Date of Birth number"),
    Gender: yup.string("Enter Gender"),
    VisitNumber: yup
      .number("Enter visit number")
      .required("Visit Number is required"),
    ServiceBegin: yup
      .date("Enter service begin date")
      .required("Service begin date is required"),
    Payor: yup.string("Enter Payor").required("Payor is required"),
    State: yup
      .string("Enter state abbreviation")
      .max(2, "State should be 2 letters"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      SSN: "",
      DateOfBirth: "",
      Gender: "",
      VisitNumber: "",
      ServiceBegin: "",
      Payor: "",
      State: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
        <div className="text-3xl font-bold text-center my-4">
          Check Eligibility Form
        </div>
        <div className="form-bg p-5">
          <form onSubmit={formik.handleSubmit} className="my-5 p-4 md:p-7 bg ">
            <div className="mx-auto">
              <ThemeProvider theme={theme}>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 2 }}>
                  <Grid item>
                    <FormControl>
                      <TextField
                        label="First Name"
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
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <TextField
                        label="Last Name"
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
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <FormControl>
                      <TextField
                        label="Date of Birth"
                        variant="filled"
                        size="small"
                        id="DateOfBirth"
                        name="DateOfBirth"
                        value={formik.values.DateOfBirth}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.DateOfBirth &&
                          Boolean(formik.errors.DateOfBirth)
                        }
                        helperText={
                          formik.touched.DateOfBirth &&
                          formik.errors.DateOfBirth
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <TextField
                        label="SSN"
                        variant="filled"
                        size="small"
                        id="SSN"
                        name="SSN"
                        value={formik.values.SSN}
                        onChange={formik.handleChange}
                        error={formik.touched.SSN && Boolean(formik.errors.SSN)}
                        helperText={formik.touched.SSN && formik.errors.SSN}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <TextField
                        label="Gender"
                        variant="filled"
                        size="small"
                        id="Gender"
                        name="Gender"
                        value={formik.values.Gender}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Gender && Boolean(formik.errors.Gender)
                        }
                        helperText={
                          formik.touched.Gender && formik.errors.Gender
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <TextField
                        label="Visit Number"
                        variant="filled"
                        size="small"
                        id="VisitNumber"
                        name="VisitNumber"
                        value={formik.values.VisitNumber}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.VisitNumber &&
                          Boolean(formik.errors.VisitNumber)
                        }
                        helperText={
                          formik.touched.VisitNumber &&
                          formik.errors.VisitNumber
                        }
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <TextField
                        label="Service Begin"
                        variant="filled"
                        size="small"
                        id="ServiceBegin"
                        name="ServiceBegin"
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
                    <FormControl>
                      <TextField
                        label="Payor"
                        variant="filled"
                        size="small"
                        id="Payor"
                        name="Payor"
                        value={formik.values.Payor}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Payor && Boolean(formik.errors.Payor)
                        }
                        helperText={formik.touched.Payor && formik.errors.Payor}
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <TextField
                        label="State"
                        variant="filled"
                        size="small"
                        id="State"
                        name="State"
                        value={formik.values.State}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.State && Boolean(formik.errors.State)
                        }
                        helperText={formik.touched.State && formik.errors.State}
                      />
                      <FormHelperText />
                    </FormControl>
                  </Grid>
                </Grid>
              </ThemeProvider>

              <div className="mx-auto mt-5 flex justify-center">
                <button
                  className="btn primary"
                  type="submit"
                  style={{ marginRight: "10px" }}
                >
                  Check Eligibility{" "}
                </button>
                <button className="btn ghost" type="submit">
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CheckEligibility;
