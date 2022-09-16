import React from "react";
import { useFormik } from "formik";
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
} from "@mui/material";

const PriorAuth = () => {
  const validationSchema = yup.object({
    dateOfRequest: yup.date("Enter Date of Request"),
    socDate: yup.date("Enter SOC date."),
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
      .required("Phone number is required."),
    healthPlanName: yup
      .string("Enter health plan name.")
      .required("Health plan is required."),
    insurancePolicyId: yup.string("Enter the Insurance Policy ID."),
    mbi: yup
      .number("Enter patient's MBI number.")
      .required("Patient's MBI number is required."),
    emerContactNumber: yup.string("Enter emergency contact name."),
    emergContactPhoneNumber: yup.number("Enter emergency contact phone number"),
    language: yup.string("Enter valid member preferred language"),
    opn: yup.string("Enter Ordering Prescriber Name."),
    opNPI: yup.string("Enter Ordering Prescribing NPI."),
    opStreet: yup.string("Enter Ordering Prescriber Street address"),
    opCity: yup.string("Enter Ordering Prescriber City"),
    opState: yup.string("Enter Ordering Prescriber State"),
    opCounty: yup.string("Enter Ordering Prescriber County"),
    opPostalCode: yup.number("Enter Ordering Prescriber Postal Code"),
    opPhoneNumber: yup.number("Enter Ordering Prescriber Phone number"),
    opFax: yup.number("Enter Ordering Prescriber Fax"),
    pcpName: yup.string("Enter patient's PCP name"),
  });
  const formik = useFormik({
    initialValues: {
      dateOfRequest: "",
      socDate: "",
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
      emerContactNumber: "",
      emergContactPhoneNumber: "",
      language: "",
      opn: "",
      opNPI: "",
      opStreet: "",
      opCity: "",
      opState: "",
      opCounty: "",
      opPostalCode: "",
      opPhoneNumber: "",
      opFax: "",
      pcpName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="my-5 p-4 md:p-7 form-bg ">
        <div className="mx-auto">
          <div className="font-bold text-md mb-1">
            Enter the following information.
          </div>
          <div className="font-semibold text-sm mb-2">Member Details:</div>
          <div className="text-gray-400 text-xs mb-4">
            Address present in the referral details availiable or confirmed by
            patient.
          </div>

          <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2 }}>
            {/* Date Request / Soc Date */}
            <Grid item container columnSpacing={{ xs: 1, sm: 2 }}>
              <Grid item>
                <FormControl>
                  <TextField
                    label="Date of Request:"
                    variant="filled"
                    size="small"
                    id="DateOfRequest"
                    name="DateOfRequest"
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
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <TextField
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
                      formik.touched.socDate && Boolean(formik.errors.socDate)
                    }
                    helperText={formik.touched.socDate && formik.errors.socDate}
                    required
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
                  </div>
                </FormControl>
              </Grid>
              <Grid item xs={3} sm={4} md={2}>
                <FormControl>
                  <div className="md:w-full">
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
                  </div>
                </FormControl>
              </Grid>
              <Grid item xs={3} sm={4} md={2}>
                <FormControl>
                  <div className="md:w-full">
                    <TextField
                      label="State:"
                      variant="filled"
                      size="small"
                      id="state"
                      name="state"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.state && Boolean(formik.errors.state)
                      }
                      helperText={formik.touched.state && formik.errors.state}
                      required
                    />
                  </div>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <FormControl>
                  <div className="md:w-full">
                    <TextField
                      label="County:"
                      variant="filled"
                      size="small"
                      id="county"
                      name="county"
                      value={formik.values.county}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.county && Boolean(formik.errors.county)
                      }
                      helperText={formik.touched.county && formik.errors.county}
                      required
                    />
                  </div>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <FormControl>
                  <div className="md:w-full">
                    <TextField
                      label="Postal Code:"
                      variant="filled"
                      size="small"
                      id="postalCode"
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
                  </div>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <FormControl>
                  <div className="md:w-full">
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
                  </div>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl
                  sx={{ minWidth: 125 }}
                  variant="filled"
                  size="small"
                  required
                >
                  <InputLabel id="Gender">Gender</InputLabel>
                  <Select
                    labelId="Gender"
                    id="Gender"
                    name="Gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    InputLabelProps={{ shrink: true, required: true }}
                    error={
                      formik.touched.gender && Boolean(formik.errors.gender)
                    }
                    helperText={formik.touched.gender && formik.errors.gender}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl
                  sx={{ minWidth: 270 }}
                  variant="filled"
                  size="small"
                  required
                >
                  <InputLabel id="Gender">Member Preferred Language</InputLabel>
                  <Select
                    labelId="language"
                    id="language"
                    name="language"
                    value={formik.values.language}
                    onChange={formik.handleChange}
                    InputLabelProps={{ shrink: true, required: true }}
                    error={
                      formik.touched.language && Boolean(formik.errors.language)
                    }
                    helperText={
                      formik.touched.language && formik.errors.language
                    }
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {/* Plan Details */}
            <Grid item container>
              <Box>
                <div className="font-semibold text-sm mb-2">Plan Details:</div>
                <div className="text-gray-400 text-xs mb-2">
                  Please add the insurance plan details availiable from the
                  referral source / patient record.
                </div>
              </Box>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2 }}>
                <Grid item xs={6} sm={4} md={2}>
                  <FormControl>
                    <div className="md:w-full">
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
                    </div>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                  <FormControl>
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

                <Grid item xs={8} md={2}>
                  <FormControl
                  // </Grid>sx={{ width: 360 }}
                  >
                    <TextField
                      label="MBI:"
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
                  Please add the emergency contact information for the patient.
                </div>
              </Box>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2 }}>
                <Grid item xs={6} sm={4} md={2}>
                  <FormControl>
                    <div className="md:w-full">
                      <TextField
                        label="Contact Name:"
                        variant="filled"
                        size="small"
                        id="emergencyContactName"
                        name="emergencyContactName"
                        value={formik.values.emergencyContactName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.emergencyContactName &&
                          Boolean(formik.errors.emergencyContactName)
                        }
                        helperText={
                          formik.touched.emergencyContactName &&
                          formik.errors.emergencyContactName
                        }
                        required
                      />
                    </div>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                  <FormControl>
                    <TextField
                      label="Relationship:"
                      variant="filled"
                      size="small"
                      id="relationship"
                      name="relationship"
                      value={formik.values.relationship}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.relationship &&
                        Boolean(formik.errors.relationship)
                      }
                      helperText={
                        formik.touched.relationship &&
                        formik.errors.relationship
                      }
                      required
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={8} md={2}>
                  <FormControl
                  // </Grid>sx={{ width: 360 }}
                  >
                    <TextField
                      label="Contact Number:"
                      variant="filled"
                      size="small"
                      id="mbi"
                      name="mbi"
                      value={formik.values.emerContactNumber}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.mbi &&
                        Boolean(formik.errors.emerContactNumber)
                      }
                      helperText={
                        formik.touched.emerContactNumber &&
                        formik.errors.emerContactNumber
                      }
                      required
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
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2 }}>
                <Grid item xs={6} sm={4} md={2}>
                  <FormControl>
                    <div className="md:w-full">
                      <TextField
                        label="Contact Name:"
                        variant="filled"
                        size="small"
                        id="opn"
                        name="opn"
                        value={formik.values.opn}
                        onChange={formik.handleChange}
                        error={formik.touched.opn && Boolean(formik.errors.opn)}
                        helperText={formik.touched.opn && formik.errors.opn}
                        required
                      />
                    </div>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <div className="md:w-full">
                      <TextField
                        label="Street Name:"
                        variant="filled"
                        size="small"
                        id="opNPI"
                        name="opNPI"
                        value={formik.values.opNPI}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.opNPI && Boolean(formik.errors.opNPI)
                        }
                        helperText={formik.touched.opNPI && formik.errors.opNPI}
                        required
                      />
                    </div>
                  </FormControl>
                </Grid>
                <Grid item xs={3} sm={4} md={2}>
                  <FormControl>
                    <div className="md:w-full">
                      <TextField
                        label="City:"
                        variant="filled"
                        size="small"
                        id="opCity"
                        name="opCity"
                        value={formik.values.opCity}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.opCity && Boolean(formik.errors.opCity)
                        }
                        helperText={
                          formik.touched.opCity && formik.errors.opCity
                        }
                        required
                      />
                    </div>
                  </FormControl>
                </Grid>
                <Grid item xs={3} sm={4} md={2}>
                  <FormControl>
                    <div className="md:w-full">
                      <TextField
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
                        required
                      />
                    </div>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                  <FormControl>
                    <div className="md:w-full">
                      <TextField
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
                        required
                      />
                    </div>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                  <FormControl>
                    <div className="md:w-full">
                      <TextField
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
                        required
                      />
                    </div>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                  <FormControl>
                    <div className="md:w-full">
                      <TextField
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
                        required
                      />
                    </div>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                  <FormControl>
                    <div className="md:w-full">
                      <TextField
                        label="Fax:"
                        variant="filled"
                        size="small"
                        id="opFax"
                        name="opFax"
                        value={formik.values.opFax}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.opFax && Boolean(formik.errors.opFax)
                        }
                        helperText={formik.touched.opFax && formik.errors.opFax}
                        required
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
                        required
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
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2 }}>
                <Grid item xs={6} sm={4} md={3}>
                  <FormControl>
                    <TextField
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
                      required
                    />
                    <FormHelperText>
                      *Date of D/C from facility and/or office visit
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                  <FormControl>
                    <TextField
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
                      required
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
                    <TextField
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
                      required
                    />
                    <FormHelperText>*Primary Diagnosis Code</FormHelperText>
                  </FormControl>
                </Grid>

                <Grid item xs={6} md={4}>
                  <FormControl
                  // </Grid>sx={{ width: 360 }}
                  >
                    <TextField
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
                      required
                    />
                    <FormHelperText>*Past Medical History</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
      </form>
    </>
  );
};

export default PriorAuth;
