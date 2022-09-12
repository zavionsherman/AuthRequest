import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormControl, Grid, TextField } from "@mui/material";

const PriorAuth = () => {
  const validationSchema = yup.object({
    gender: yup.string("Select Gender").required("Gender is required"),
    streetName: yup
      .string("Enter your last name")
      .required("Last name is required"),
    city: yup.number("Enter Date of Birth number").required("City is required"),
    state: yup
      .date("Enter service begin date")
      .required("Service begin date is required"),
    postalCode: yup.string("Enter Payor").required("Payor is required"),
  });
  const formik = useFormik({
    initialValues: {
      gender: "",
      streetName: "",
      city: "",
      state: "",
      postalCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="my-5 p-4 md:p-7 bg ">
      <div className="mx-auto">
        <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 2 }}>
          <Grid item>
            <FormControl>
              <TextField
                label="Gender"
                variant="filled"
                size="small"
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                error={
                  formik.touched.gender && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                required
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <TextField
                label="streetName"
                variant="filled"
                size="small"
                id="streetName"
                name="streetName"
                value={formik.values.streetName}
                onChange={formik.handleChange}
                error={
                  formik.touched.streetName && Boolean(formik.errors.streetName)
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
                label="city"
                variant="filled"
                size="small"
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <TextField
                label="state"
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
                label="postalCode"
                variant="filled"
                size="small"
                id="postalCoder"
                name="postalCode"
                value={formik.values.postalCode}
                onChange={formik.handleChange}
                error={
                  formik.touched.postalCode && Boolean(formik.errors.postalCode)
                }
                helperText={formik.touched.Payor && formik.errors.Payor}
                required
              />
            </FormControl>
          </Grid>
        </Grid>

        <div className="mx-auto mt-5 flex justify-center">
          <button
            className="btn primary"
            type="submit"
            style={{ marginRight: "10px" }}
          >
            Create Referral{" "}
          </button>
          <button className="btn ghost" type="submit">
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default PriorAuth;
