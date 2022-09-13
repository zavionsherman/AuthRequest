import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormControl, Grid, TextField, Box } from "@mui/material";

const PriorAuth = () => {
  const validationSchema = yup.object({
    gender: yup.string("Select Gender").required("Gender is required"),
    streetName: yup
      .string("Enter your last name")
      .required("Last name is required"),
    city: yup.number("Enter Date of Birth number").required("City is required"),
    state: yup
      .date("Enter service begin date.")
      .required("Service begin date is required."),
    postalCode: yup.string("Enter Payor.").required("Payor is required."),
    county: yup.string("Enter County.").required("County is required."),
    phoneNumber: yup
      .number("Enter patient's phone number.")
      .required("Phone numberis required."),
    healthPlanName: yup
      .string("Enter health plan name.")
      .required("Health plan is required."),
    insurancePolicyId: yup.string("Enter the Insurance Policy ID."),
    mbi: yup
      .number("Enter patient's MBI number.")
      .required("Patient's MBI number is required."),
    //emergencyContactName: yup.string("Enter emergency contact name.").required('Emergency contact name is required.'),
    //emergContactPhoneNumber: yup.number('Enter emergency contact phone number')
  });
  const formik = useFormik({
    initialValues: {
      gender: "",
      streetName: "",
      city: "",
      state: "",
      postalCode: "",
      county: "",
      phoneNumber: "",
      healthPlanName: "",
      insurancePolicyId: "",
      mbi: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="my-5 p-4 md:p-7 bg ">
        <div className="mx-auto">
          <div className="font-bold text-md mb-1">
            Enter the following information to create a referral.
          </div>
          <div className="font-semibold text-sm mb-2">Address Details:</div>
          <div className="text-gray-400 text-xs mb-4">
            Address present in the referral details availiable or confirmed by
            patient.
          </div>
          <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 2 }}>
            <Grid item>
              <FormControl>
                <TextField
                  label="Street Name:"
                  variant="filled"
                  size="small"
                  id="streetName"
                  name="streetName"
                  value={formik.values.streetName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.streetName &&
                    Boolean(formik.errors.streetName)
                  }
                  helperText={
                    formik.touched.streetName && formik.errors.streetName
                  }
                  required
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  label="City:"
                  variant="filled"
                  size="small"
                  id="city"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                  required
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  label="State:"
                  variant="filled"
                  size="small"
                  id="state"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                  required
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  label="Postal Code:"
                  variant="filled"
                  size="small"
                  id="postalCoder"
                  name="postalCode"
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.postalCode &&
                    Boolean(formik.errors.postalCode)
                  }
                  helperText={
                    formik.touched.postalCode && formik.errors.postalCode
                  }
                  required
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  label="Phone Number:"
                  variant="filled"
                  size="small"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                  required
                />
              </FormControl>
            </Grid>
            <div className="my-5 p-4 md:p-5 bg">
              <Box>
                <div className="font-semibold text-sm mb-2">Plan Details:</div>
                <div className="text-gray-400 text-xs mb-2">
                  Please add the insurance plan details availiable from teh
                  referral source / patient record.
                </div>
              </Box>
              <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 2 }}>
                <Grid item>
                  <FormControl>
                    <TextField
                      label="Health Plan Name:"
                      variant="filled"
                      size="small"
                      id="healthPlanName"
                      name="healthPlanName"
                      value={formik.values.healthPlanName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.healthPlanName &&
                        Boolean(formik.errors.healthPlanName)
                      }
                      helperText={
                        formik.touched.healthPlanName &&
                        formik.errors.healthPlanName
                      }
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl fullWidth>
                    <TextField
                      label="Insurance Policy ID:"
                      variant="filled"
                      size="small"
                      id="insurancePolicyId"
                      name="insurancePolicyId"
                      value={formik.values.insurancePolicyId}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.insurancePolicyId &&
                        Boolean(formik.errors.insurancePolicyId)
                      }
                      helperText={
                        formik.touched.insurancePolicyId &&
                        formik.errors.insurancePolicyId
                      }
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <TextField
                      label="Medicare Beneficiary Identifier:"
                      variant="filled"
                      size="small"
                      id="mbi"
                      name="mbi"
                      value={formik.values.mbi}
                      onChange={formik.handleChange}
                      error={formik.touched.mbi && Boolean(formik.errors.mbi)}
                      helperText={formik.touched.mbi && formik.errors.mbi}
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <TextField
                      label="Gender:"
                      variant="filled"
                      size="small"
                      id="gender"
                      name="gender"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                      helperText={formik.touched.gender && formik.errors.gender}
                      required
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
        <div className="mx-auto mt-5 flex justify-center">
          <button
            className="btn primary"
            type="submit"
            style={{ marginRight: "10px" }}
          >
            Create Referral{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default PriorAuth;
