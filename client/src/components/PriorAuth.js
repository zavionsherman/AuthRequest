import React from "react";
import { useFormik, Formik, Form, Field } from "formik";
import * as yup from "yup";
import {
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Box,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Textfield from "./FormsUI/Textfield";
import { validationSchema, initialValues } from "./data";

const PriorAuth = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form
            onSubmit={formik.handleSubmit}
            className="my-2 p-4 md:p-7 form-bg "
          >
            <div className="mx-auto">
              <div className="font-bold text-md mb-1">
                Enter the following information.
              </div>
              <div className="font-semibold text-sm mb-2">Member Details:</div>
              <div className="text-gray-400 text-xs mb-4">
                Address present in the referral details availiable or confirmed
                by patient.
              </div>

              <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2 }}>
                {/* Date Request / Soc Date */}
                <Grid item container columnSpacing={{ xs: 1, sm: 2 }}>
                  <Grid item>
                    <FormControl>
                      <Field
                        as={TextField}
                        label="Date of Request:"
                        variant="filled"
                        size="small"
                        id="dateOfRequest"
                        name="dateOfRequest"
                        type="date"
                        value={formik.values.dateOfRequest}
                        InputLabelProps={{ shrink: true, required: true }}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.dateOfRequest &&
                          Boolean(formik.errors.dateOfRequest)
                        }
                        helperText={
                          formik.touched.dateOfRequest &&
                          formik.errors.dateOfRequest
                        }
                        //required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <Field
                        as={TextField}
                        label="SOC Date:"
                        variant="filled"
                        size="small"
                        id="socDate"
                        name="socDate"
                        type="date"
                        value={formik.values.socDate}
                        InputLabelProps={{ shrink: true, required: true }}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.socDate &&
                          Boolean(formik.errors.socDate)
                        }
                        helperText={
                          formik.touched.socDate && formik.errors.socDate
                        }
                        // required
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                {/* Address */}
                <Grid
                  item
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2 }}
                >
                  <Grid item>
                    <FormControl>
                      <div className="md:w-full">
                        <Field
                          as={TextField}
                          label="Street Name:"
                          variant="filled"
                          size="small"
                          id="streetName"
                          name="streetName"
                          value={formik.values.streetName}
                          onChange={formik.handleChange}
                          InputLabelProps={{
                            required: true,
                          }}
                          error={
                            formik.touched.streetName &&
                            Boolean(formik.errors.streetName)
                          }
                          helperText={
                            formik.touched.streetName &&
                            formik.errors.streetName
                          }
                        />
                      </div>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3} sm={4} md={2}>
                    <FormControl>
                      <div className="md:w-full">
                        <Field
                          as={TextField}
                          label="City:"
                          variant="filled"
                          size="small"
                          id="city"
                          name="city"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          InputLabelProps={{
                            required: true,
                          }}
                          error={
                            formik.touched.city && Boolean(formik.errors.city)
                          }
                          helperText={formik.touched.city && formik.errors.city}
                        />
                      </div>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3} sm={4} md={2}>
                    <FormControl>
                      <div className="md:w-full">
                        <Field
                          as={TextField}
                          label="State:"
                          variant="filled"
                          size="small"
                          id="state"
                          name="state"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                          InputLabelProps={{
                            required: true,
                          }}
                          error={
                            formik.touched.state && Boolean(formik.errors.state)
                          }
                          helperText={
                            formik.touched.state && formik.errors.state
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
                          label="County:"
                          variant="filled"
                          size="small"
                          id="county"
                          name="county"
                          value={formik.values.county}
                          onChange={formik.handleChange}
                          InputLabelProps={{
                            required: true,
                          }}
                          error={
                            formik.touched.county &&
                            Boolean(formik.errors.county)
                          }
                          helperText={
                            formik.touched.county && formik.errors.county
                          }
                        />
                      </div>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                    <FormControl>
                      <div className="md:w-full">
                        <Field
                          as={TextField}
                          label="Postal Code:"
                          variant="filled"
                          size="small"
                          id="postalCode"
                          name="postalCode"
                          value={formik.values.postalCode}
                          onChange={formik.handleChange}
                          InputLabelProps={{
                            required: true,
                          }}
                          error={
                            formik.touched.postalCode &&
                            Boolean(formik.errors.postalCode)
                          }
                          helperText={
                            formik.touched.postalCode &&
                            formik.errors.postalCode
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
                          label="Phone Number:"
                          variant="filled"
                          size="small"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formik.values.phoneNumber}
                          onChange={formik.handleChange}
                          InputLabelProps={{
                            required: true,
                          }}
                          error={
                            formik.touched.phoneNumber &&
                            Boolean(formik.errors.phoneNumber)
                          }
                          helperText={
                            formik.touched.phoneNumber &&
                            formik.errors.phoneNumber
                          }
                        />
                      </div>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl
                      sx={{ minWidth: 125 }}
                      variant="filled"
                      size="small"
                    >
                      <InputLabel id="Gender">Gender</InputLabel>
                      <Select
                        labelId="Gender"
                        id="Gender"
                        name="Gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        // InputLabelProps={{ shrink: true, required: true }}
                        error={
                          formik.touched.gender && Boolean(formik.errors.gender)
                        }
                        // helperText={
                        //   formik.touched.gender && formik.errors.gender
                        // }
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                      <FormHelperText>
                        <span className="text-red-500">
                          {formik.touched.gender && formik.errors.gender}
                        </span>
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl
                      sx={{ minWidth: 270 }}
                      variant="filled"
                      size="small"
                    >
                      <InputLabel id="language">
                        Member Preferred Language
                      </InputLabel>
                      <Select
                        labelId="language"
                        id="language"
                        name="language"
                        value={formik.values.language}
                        onChange={formik.handleChange}
                        // InputLabelProps={{ shrink: true, required: true }}
                        error={
                          formik.touched.language &&
                          Boolean(formik.errors.language)
                        }
                        // helperText={
                        //   formik.touched.language && formik.errors.language
                        // }
                      >
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="Spanish">Spanish</MenuItem>
                      </Select>
                      <FormHelperText>
                        <span className="text-red-500">
                          {formik.touched.language && formik.errors.language}
                        </span>
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
                {/* Plan Details */}
                <Grid item container>
                  <Box>
                    <div className="font-semibold text-sm mb-2">
                      Plan Details:
                    </div>
                    <div className="text-gray-400 text-xs mb-2">
                      Please add the insurance plan details availiable from the
                      referral source / patient record.
                    </div>
                  </Box>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2 }}
                  >
                    <Grid item xs={6} sm={4} md={2}>
                      <FormControl>
                        <div className="md:w-full">
                          <Field
                            as={TextField}
                            label="Health Plan Name:"
                            variant="filled"
                            size="small"
                            id="healthPlanName"
                            name="healthPlanName"
                            value={formik.values.healthPlanName}
                            InputLabelProps={{
                              required: true,
                            }}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.healthPlanName &&
                              Boolean(formik.errors.healthPlanName)
                            }
                            helperText={
                              formik.touched.healthPlanName &&
                              formik.errors.healthPlanName
                            }
                          />
                        </div>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                      <FormControl>
                        <Field
                          as={TextField}
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
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={8} md={2}>
                      <FormControl
                      // </Grid>sx={{ width: 360 }}
                      >
                        <Field
                          as={TextField}
                          label="MBI:"
                          variant="filled"
                          size="small"
                          id="mbi"
                          name="mbi"
                          value={formik.values.mbi}
                          onChange={formik.handleChange}
                          InputLabelProps={{
                            required: true,
                          }}
                          error={
                            formik.touched.mbi && Boolean(formik.errors.mbi)
                          }
                          helperText={formik.touched.mbi && formik.errors.mbi}
                        />
                        <FormHelperText>
                          *Medicare Beneficiary Identifier Number
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Emergency Contact Details */}
                <Grid item container>
                  <Box>
                    <div className="font-semibold text-sm mb-2">
                      Emergency Contact Details:
                    </div>
                    <div className="text-gray-400 text-xs mb-2">
                      Please add the emergency contact information for the
                      patient.
                    </div>
                  </Box>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2 }}
                  >
                    <Grid item xs={6} sm={4} md={2}>
                      <FormControl>
                        <div className="md:w-full">
                          <Field
                            as={TextField}
                            label="Contact Name:"
                            variant="filled"
                            size="small"
                            id="emergencyContactName"
                            name="emergencyContactName"
                            value={formik.values.emergencyContactName}
                            onChange={formik.handleChange}
                            InputLabelProps={{
                              required: true,
                            }}
                            error={
                              formik.touched.emergencyContactName &&
                              Boolean(formik.errors.emergencyContactName)
                            }
                            helperText={
                              formik.touched.emergencyContactName &&
                              formik.errors.emergencyContactName
                            }
                          />
                        </div>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="Relationship:"
                          variant="filled"
                          size="small"
                          id="emerContactRelationship"
                          name="emerContactRelationship"
                          value={formik.values.emerContactRelationship}
                          onChange={formik.handleChange}
                          InputLabelProps={{
                            required: true,
                          }}
                          error={
                            formik.touched.emerContactRelationship &&
                            Boolean(formik.errors.emerContactRelationship)
                          }
                          helperText={
                            formik.touched.emerContactRelationship &&
                            formik.errors.emerContactRelationship
                          }
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={8} md={2}>
                      <FormControl
                      // </Grid>sx={{ width: 360 }}
                      >
                        <Field
                          as={TextField}
                          label="Contact Number:"
                          variant="filled"
                          size="small"
                          id="mbi"
                          name="mbi"
                          value={formik.values.emerContactNumber}
                          onChange={formik.handleChange}
                          InputLabelProps={{
                            required: true,
                          }}
                          error={
                            formik.touched.mbi &&
                            Boolean(formik.errors.emerContactNumber)
                          }
                          helperText={
                            formik.touched.emerContactNumber &&
                            formik.errors.emerContactNumber
                          }
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Ordering Prescriber Deti */}
                <Grid item container>
                  <Box>
                    <div className="font-semibold text-sm mb-2">
                      Ordering Prescriber Details:
                    </div>
                    <div className="text-gray-400 text-xs mb-2">
                      Please enter the Ordering Prescriber information.
                    </div>
                  </Box>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2 }}
                  >
                    <Grid item xs={6} sm={4} md={2}>
                      <FormControl>
                        <div className="md:w-full">
                          <Field
                            as={TextField}
                            label="Contact Name:"
                            variant="filled"
                            size="small"
                            id="opn"
                            name="opn"
                            value={formik.values.opn}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.opn && Boolean(formik.errors.opn)
                            }
                            helperText={formik.touched.opn && formik.errors.opn}
                          />
                        </div>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <div className="md:w-full">
                          <Field
                            as={TextField}
                            label="Ordering Presribing NPI:"
                            variant="filled"
                            size="small"
                            id="opNPI"
                            name="opNPI"
                            value={formik.values.opNPI}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.opNPI &&
                              Boolean(formik.errors.opNPI)
                            }
                            helperText={
                              formik.touched.opNPI && formik.errors.opNPI
                            }
                          />
                        </div>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3} sm={4} md={2}>
                      <FormControl>
                        <div className="md:w-full">
                          <Field
                            as={TextField}
                            label="City:"
                            variant="filled"
                            size="small"
                            id="opCity"
                            name="opCity"
                            value={formik.values.opCity}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.opCity &&
                              Boolean(formik.errors.opCity)
                            }
                            helperText={
                              formik.touched.opCity && formik.errors.opCity
                            }
                          />
                        </div>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3} sm={4} md={2}>
                      <FormControl>
                        <div className="md:w-full">
                          <Field
                            as={TextField}
                            label="State:"
                            variant="filled"
                            size="small"
                            id="opState"
                            name="opState"
                            value={formik.values.opState}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.opState &&
                              Boolean(formik.errors.opState)
                            }
                            helperText={
                              formik.touched.opState && formik.errors.opState
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
                            label="County:"
                            variant="filled"
                            size="small"
                            id="opCounty"
                            name="opCounty"
                            value={formik.values.opCounty}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.opCounty &&
                              Boolean(formik.errors.opCounty)
                            }
                            helperText={
                              formik.touched.opCounty && formik.errors.opCounty
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
                            label="Postal Code:"
                            variant="filled"
                            size="small"
                            id="opPostalCode"
                            name="opPostalCode"
                            value={formik.values.opPostalCode}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.opPostalCode &&
                              Boolean(formik.errors.opPostalCode)
                            }
                            helperText={
                              formik.touched.opPostalCode &&
                              formik.errors.opPostalCode
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
                            label="Phone Number:"
                            variant="filled"
                            size="small"
                            id="opPhoneNumber"
                            name="opPhoneNumber"
                            value={formik.values.opPhoneNumber}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.opPhoneNumber &&
                              Boolean(formik.errors.opPhoneNumber)
                            }
                            helperText={
                              formik.touched.opPhoneNumber &&
                              formik.errors.opPhoneNumber
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
                            label="Fax:"
                            variant="filled"
                            size="small"
                            id="opFax"
                            name="opFax"
                            value={formik.values.opFax}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.opFax &&
                              Boolean(formik.errors.opFax)
                            }
                            helperText={
                              formik.touched.opFax && formik.errors.opFax
                            }
                          />
                        </div>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                      <FormControl>
                        <div className="md:w-full">
                          <TextField
                            label="Patient's PCP Name:"
                            variant="filled"
                            size="small"
                            id="pcpName"
                            name="pcpName"
                            value={formik.values.pcpName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.pcpName &&
                              Boolean(formik.errors.pcpName)
                            }
                            helperText={
                              formik.touched.pcpName && formik.errors.pcpName
                            }
                          />
                        </div>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Medical Details */}
                <Grid item container>
                  <Box>
                    <div className="font-semibold text-sm mb-2">
                      Medical Details:
                    </div>
                    <div className="text-gray-400 text-xs mb-2">
                      Please enter the medical details for the patient.
                    </div>
                  </Box>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2 }}
                  >
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="Date of D/C:"
                          variant="filled"
                          size="small"
                          id="dateOfDischarge"
                          name="dateOfDischarge"
                          type="date"
                          value={formik.values.dateOfDischarge}
                          InputLabelProps={{ shrink: true, required: true }}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.dateOfDischarge &&
                            Boolean(formik.errors.dateOfDischarge)
                          }
                          helperText={
                            formik.touched.dateOfDischarge &&
                            formik.errors.dateOfDischarge
                          }
                        />
                        <FormHelperText>
                          *Date of D/C from facility and/or office visit
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="Primary Diagnosis:"
                          variant="filled"
                          size="small"
                          id="primaryDiagnosis"
                          name="primaryDiagnosis"
                          value={formik.values.primaryDiagnosis}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.primaryDiagnosis &&
                            Boolean(formik.errors.primaryDiagnosis)
                          }
                          helperText={
                            formik.touched.primaryDiagnosis &&
                            formik.errors.primaryDiagnosis
                          }
                        />
                        <FormHelperText>
                          *Add comma seperated values ex: Covid,Anxiety
                        </FormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3}>
                      <FormControl
                      // </Grid>sx={{ width: 360 }}
                      >
                        <Field
                          as={TextField}
                          label="PDC:"
                          variant="filled"
                          size="small"
                          id="primaryDiagnosisCode"
                          name="primaryDiagnosisCode"
                          value={formik.values.primaryDiagnosisCode}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.primaryDiagnosisCode &&
                            Boolean(formik.errors.primaryDiagnosisCode)
                          }
                          helperText={
                            formik.touched.primaryDiagnosisCode &&
                            formik.errors.primaryDiagnosisCode
                          }
                        />
                        <FormHelperText>*Primary Diagnosis Code</FormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid item xs={6} md={4}>
                      <FormControl
                      // </Grid>sx={{ width: 360 }}
                      >
                        <Field
                          as={TextField}
                          label="Medical History:"
                          variant="filled"
                          size="small"
                          id="pastMedicalHistory"
                          name="pastMedicalHistory"
                          value={formik.values.pastMedicalHistory}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.pastMedicalHistory &&
                            Boolean(formik.errors.pastMedicalHistory)
                          }
                          helperText={
                            formik.touched.pastMedicalHistory &&
                            formik.errors.pastMedicalHistory
                          }
                        />
                        <FormHelperText>*Past Medical History</FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Referral Source Information */}
                <Grid item container>
                  <Box>
                    <div className="font-semibold text-sm mb-2">
                      Referral Source:
                    </div>
                    <div className="text-gray-400 text-xs mb-2">
                      Please enter the referral source information
                    </div>
                  </Box>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2 }}
                  >
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControl
                        sx={{ minWidth: 270 }}
                        variant="filled"
                        size="small"
                      >
                        <InputLabel id="source">Referral Source</InputLabel>
                        <Select
                          labelId="source"
                          id="source"
                          name="source"
                          value={formik.values.source}
                          onChange={formik.handleChange}
                          // inputlabelprops={{ shrink: true, required: true }}
                          error={
                            formik.touched.source &&
                            Boolean(formik.errors.source)
                          }
                          // helpertext={
                          //   formik.touched.source && formik.errors.source
                          // }
                        >
                          <MenuItem value="English">Hospital</MenuItem>
                          <MenuItem value="SNF/Rehab">SNF/Rehab</MenuItem>
                          <MenuItem value="Spanish">MD Office</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                        <FormHelperText>
                          <span className="text-red-500">
                            {formik.touched.source && formik.errors.source}
                          </span>
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="Name:"
                          variant="filled"
                          size="small"
                          id="sourceName"
                          name="sourceName"
                          type="text"
                          value={formik.values.sourceName}
                          InputLabelProps={{ required: true }}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.sourceName &&
                            Boolean(formik.errors.sourceName)
                          }
                          helperText={
                            formik.touched.sourceName &&
                            formik.errors.sourceName
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="NPI:"
                          variant="filled"
                          size="small"
                          id="sourceNPI"
                          name="sourceNPI"
                          type="text"
                          value={formik.values.sourceNPI}
                          InputLabelProps={{ required: true }}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.sourceNPI &&
                            Boolean(formik.errors.sourceNPI)
                          }
                          helperText={
                            formik.touched.sourceNPI && formik.errors.sourceNPI
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="Contact:"
                          variant="filled"
                          size="small"
                          id="sourceContact"
                          name="sourceContact"
                          type="text"
                          value={formik.values.sourceContact}
                          InputLabelProps={{ required: true }}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.sourceContact &&
                            Boolean(formik.errors.sourceContact)
                          }
                          helperText={
                            formik.touched.sourceContact &&
                            formik.errors.sourceContact
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="Phone:"
                          variant="filled"
                          size="small"
                          id="sourcePhone"
                          name="sourcePhone"
                          type="text"
                          value={formik.values.sourcePhone}
                          InputLabelProps={{ required: true }}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.sourcePhone &&
                            Boolean(formik.errors.sourcePhone)
                          }
                          helperText={
                            formik.touched.sourcePhone &&
                            formik.errors.sourcePhone
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="Fax:"
                          variant="filled"
                          size="small"
                          id="sourceFax"
                          name="sourceFax"
                          type="text"
                          value={formik.values.sourceFax}
                          InputLabelProps={{ required: true }}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.sourceFax &&
                            Boolean(formik.errors.sourceFax)
                          }
                          helperText={
                            formik.touched.sourceFax && formik.errors.sourceFax
                          }
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Agency Details Information */}
                <Grid item container>
                  <Box>
                    <div className="font-semibold text-sm mb-2">
                      Agency Details:
                    </div>
                    <div className="text-gray-400 text-xs mb-2">
                      Please enter the agency details.
                    </div>
                  </Box>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2 }}
                  >
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControl
                        sx={{ minWidth: 270 }}
                        variant="filled"
                        size="small"
                      >
                        <InputLabel id="agency">Accepting Agency</InputLabel>
                        <Select
                          labelId="agency"
                          id="agency"
                          name="agency"
                          value={formik.values.acceptingAgency}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.acceptingAgency &&
                            Boolean(formik.errors.acceptingAgency)
                          }
                        >
                          <MenuItem value="English">Hospital</MenuItem>
                          <MenuItem value="SNF/Rehab">SNF/Rehab</MenuItem>
                          <MenuItem value="Spanish">MD Office</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                        <FormHelperText>
                          <span className="text-red-500">
                            {formik.touched.acceptingAgency &&
                              formik.errors.acceptingAgency}
                          </span>
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="Agency Email:"
                          variant="filled"
                          size="small"
                          id="agencyEmail"
                          name="agencyEmail"
                          type="email"
                          value={formik.values.agencyEmail}
                          // InputLabelProps={{ shrink: true, required: true }}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.agencyEmail &&
                            Boolean(formik.errors.agencyEmail)
                          }
                          helperText={
                            formik.touched.agencyEmail &&
                            formik.errors.agencyEmail
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="Agency Contact Name:"
                          variant="filled"
                          size="small"
                          id="AgencyName"
                          name="AgencyName"
                          type="text"
                          value={formik.values.AgencyName}
                          // InputLabelProps={{ shrink: true, required: true }}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.AgencyName &&
                            Boolean(formik.errors.AgencyName)
                          }
                          helperText={
                            formik.touched.AgencyName &&
                            formik.errors.AgencyName
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="Agency Phone:"
                          variant="filled"
                          size="small"
                          id="agencyPhone"
                          name="agencyPhone"
                          type="text"
                          value={formik.values.agencyPhone}
                          // InputLabelProps={{ shrink: true, required: true }}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.agencyPhone &&
                            Boolean(formik.errors.agencyPhone)
                          }
                          helperText={
                            formik.touched.agencyPhone &&
                            formik.errors.agencyPhone
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <Field
                          as={TextField}
                          label="Agency Fax:"
                          variant="filled"
                          size="small"
                          id="agencyFax"
                          name="agencyFax"
                          type="text"
                          value={formik.values.agencyFax}
                          // InputLabelProps={{ shrink: true, required: true }}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.agencyFax &&
                            Boolean(formik.errors.agencyFax)
                          }
                          helperText={
                            formik.touched.agencyFax && formik.errors.agencyFax
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl
                        sx={{ minWidth: 270 }}
                        variant="filled"
                        size="small"
                      >
                        <InputLabel id="sendApprovedAuth">
                          Send Approved Auth to:
                        </InputLabel>
                        <Select
                          labelId="sendApprovedAuth"
                          id="sendApprovedAuth"
                          name="sendApprovedAuth"
                          value={formik.values.sendApprovedAuth}
                          onChange={formik.handleChange}
                          // InputLabelProps={{ shrink: true, required: true }}
                          error={
                            formik.touched.sendApprovedAuth &&
                            Boolean(formik.errors.sendApprovedAuth)
                          }
                        >
                          <MenuItem value="Email">Email</MenuItem>
                          <MenuItem value="Fax">Fax</MenuItem>
                          <MenuItem value="Both">Both</MenuItem>
                        </Select>
                        <FormHelperText>
                          <span className="text-red-500">
                            {formik.touched.sendApprovedAuth &&
                              formik.errors.sendApprovedAuth}
                          </span>
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Clinical Grouping */}
                <Grid item>
                  <FormControl
                    sx={{ minWidth: 270 }}
                    variant="filled"
                    size="small"
                  >
                    <InputLabel id="clinicalGrouping">
                      Clinical Grouping
                    </InputLabel>
                    <Select
                      labelId="clinicalGrouping"
                      id="clinicalGrouping"
                      name="clinicalGrouping"
                      value={formik.values.clinicalGrouping}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.clinicalGrouping &&
                        Boolean(formik.errors.clinicalGrouping)
                      }
                    >
                      <MenuItem value="General/Other">General/Other</MenuItem>
                      <MenuItem value="THR/TKR/ORIF (No Rehab)">
                        THR/TKR/ORIF (No Rehab)
                      </MenuItem>
                      <MenuItem value="THR/TKR/ORIF (With Rehab)">
                        THR/TKR/ORIF (With Rehab)
                      </MenuItem>
                      <MenuItem value="Wound Care/Wound Vac">
                        Wound Care/Wound Vac
                      </MenuItem>
                      <MenuItem value="Foley Catheter">Foley Catheter</MenuItem>
                      <MenuItem value="Foley Catheter">Foley Catheter</MenuItem>
                      <MenuItem value="Foley Catheter">Foley Catheter</MenuItem>
                      <MenuItem value="Foley Catheter">Foley Catheter</MenuItem>
                      <MenuItem value="Foley Catheter">Foley Catheter</MenuItem>
                      <MenuItem value="Foley Catheter">Foley Catheter</MenuItem>
                      <MenuItem value="Foley Catheter">Foley Catheter</MenuItem>
                      <MenuItem value="Foley Catheter">Foley Catheter</MenuItem>
                      <MenuItem value="Foley Catheter">Foley Catheter</MenuItem>
                      <MenuItem value="Foley Catheter">Foley Catheter</MenuItem>
                    </Select>
                    <FormHelperText>
                      <span className="text-red-500">
                        {formik.touched.clinicalGrouping &&
                          formik.errors.clinicalGrouping}
                      </span>
                    </FormHelperText>
                  </FormControl>
                </Grid>
                {/* Checkboxes */}
              </Grid>
              {/* Care Type */}
              <div className="my-5 py-5 border-b-2 text-small">
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>Care Type Required</Box>
                  <Grid item>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.LovenoxInjections} />
                        }
                        label="Lovenox Injections"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.FeedingTube} />
                        }
                        label="Feeding Tube"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.LeftVentricularAssistDevice}
                          />
                        }
                        label="LVAD"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.Tracheostomy} />
                        }
                        label="Trach"
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item>
                    <div>PICC line care*</div>
                    <div>Behavioral Health/Psychiatric*</div>
                    <div>Home Infusion Therapy*</div>
                  </Grid>
                  <Grid item>
                    <div className="w-60 my-4">
                      PHCN is not contracted, theses card types must be
                      coordinated through the Health Plan*
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="my-5 py-5 border-b-2">
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    Which skilled disciplines <br />
                    are ordered for start of care? <br />
                    CHOOSE ALL THAT APPLY.
                  </Box>
                  <Grid item>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.speechTherapy} />
                        }
                        label="Speech Therapy"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.skilledNursing} />
                        }
                        label="Skilled Nursing"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.physicalTherapy} />
                        }
                        label="Physical Therapy"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.occupationalTherapy}
                          />
                        }
                        label="Occupational Therapy"
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.homeHealthAide} />
                        }
                        label="Home Health Aid (must be paired with SN, PT, OT or ST)"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.medicalSocialWorker}
                          />
                        }
                        label="Medical Social Worker (must be paired with SN, PT, OT or ST)"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.nurseToOpen} />
                        }
                        label="Nurse to Open Required"
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
              </div>
              <div className="my-5 py-5 border-b-2">
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    Please submit the <br /> following as attachments:
                  </Box>
                  <Grid item>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.healthCareSigned} />
                        }
                        label="MD, DO, DPM, NP, or PA Home Healthcare order"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              formik.values.supportingClincialDocumentation
                            }
                          />
                        }
                        label="Supporting Clinical Documentation"
                      />
                    </FormGroup>
                  </Grid>

                  <Grid item>
                    <div className="font-bold">
                      Please provide the following, if applicable:
                    </div>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked={formik.values.HP} />}
                        label="H&amp;P"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.InpatientDischargeSummary}
                          />
                        }
                        label="Inpatient Discharge Summary"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.notesFromHospital} />
                        }
                        label="Notes from Hospital or SNF(including any therapy notes)"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.mdOfficeNotes} />
                        }
                        label="MD Office Notes"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={formik.values.woundCareNotes} />
                        }
                        label="Wound Care Notes with Measurements"
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
              </div>
              <div className="my-5 py-5">
                <div className="font-bold">
                  Please upload your attachments here{" "}
                  <span className="text-red-500">*</span>
                </div>
                <div className="italic">
                  To select multiple files hold the CTRL key and select each
                  individual file for uploading.
                </div>
                <div className="my-3">
                  <input
                    type="file"
                    id="attachments"
                    name="attachments"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto mt-5 flex justify-center">
              <button
                className="btn primary"
                type="submit"
                style={{ marginRight: "10px" }}
              >
                Request Authorization{" "}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PriorAuth;
