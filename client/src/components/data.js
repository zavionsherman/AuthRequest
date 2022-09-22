import * as yup from "yup";

const validationSchema = yup.object({
  dateOfRequest: yup
    .date("Enter Date of Request.")
    .required("Date of Request is required."),
  socDate: yup.date("Enter SOC date.").required("SOC Date is required"),
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
  language: yup
    .string("Enter valid member preferred language")
    .required("Member preferred language is required."),
  healthPlanName: yup
    .string("Enter health plan name.")
    .required("Health plan is required."),
  insurancePolicyId: yup
    .string("Enter the Insurance Policy ID.")
    .required("Insurance Policy ID is required"),
  mbi: yup
    .number("Enter patient's MBI number.")
    .required("Patient's MBI number is required."),
  emergencyContactName: yup
    .string("Enter emergency contact name.")
    .required("Emergency contact name is required."),
  emerContactRelationship: yup
    .string("Enter emergency contact relationship.")
    .required("Emergency contact relationship is required."),
  emerContactNumber: yup
    .number("Enter emergency contact phone number")
    .required("Emergency contact phone number is required."),
  opn: yup
    .string("Enter Ordering Prescriber Name.")
    .required("OPN is required."),
  opNPI: yup
    .string("Enter Ordering Prescribing NPI.")
    .required("Ordering Prescribing NPI is required."),
  opStreet: yup
    .string("Enter Ordering Prescriber Street address.")
    .required("Ordering Prescriber street address is required."),
  opCity: yup
    .string("Enter Ordering Prescriber City.")
    .required("Ordering Prescriber city is required."),
  opState: yup
    .string("Enter Ordering Prescriber State.")
    .required("Ordering Prescriber state is required."),
  opCounty: yup
    .string("Enter Ordering Prescriber County.")
    .required("Ordering Prescriber county is required."),
  opPostalCode: yup
    .number("Enter Ordering Prescriber Postal Code.")
    .required("Ordering Prescriber postal code is required."),
  opPhoneNumber: yup
    .number("Enter Ordering Prescriber Phone number.")
    .required("Ordering Prescriber phone number is required."),
  opFax: yup
    .number("Enter Ordering Prescriber Fax.")
    .required("Ordering Prescriber fax is required."),
  pcpName: yup
    .string("Enter patient's PCP name.")
    .required("Patient's PCP name is required."),
  dateOfDischarge: yup
    .date("Enter the Date of Discharge.")
    .required("Date of Discharge is required."),
  primaryDiagnosis: yup
    .string("Enter the Primary Diagnosis.")
    .required("Primary Diagnosis is required."),
  primaryDiagnosisCode: yup
    .string("Enter primary diagnosis code.")
    .required("Primary Diagnosis Code is required."),
  pastMedicalHistory: yup
    .string("Enter past medical history.")
    .required("Medical History is required."),
  source: yup
    .string("Enter the referral source.")
    .required("Referral source is required."),
  sourceName: yup
    .string("Enter the referral source's name.")
    .required("Referral source is required."),
  sourceNPI: yup
    .string("Enter the referral source's NPI.")
    .required("Source NPI is required."),
  sourceContact: yup
    .string("Enter the referral source's contact.")
    .required("Referral source's contact is required."),
  sourcePhone: yup
    .string("Enter the referral source's Phone number.")
    .required("Referral source's phone number is required."),
  sourceFax: yup
    .string("Enter the referral source's Fax")
    .required("Referral source fax is required."),
  acceptingAgency: yup
    .string("Select the accepting agency.")
    .required("Accepting agency is required."),
  AgencyName: yup
    .string("Enter Agency Name.")
    .required("Agency Contact Name is required."),
  agencyEmail: yup
    .string("Enter the agency's email.")
    .required("Agency's Email is required."),
  agencyContactName: yup
    .string("Enter the name of the agency.")
    .required("Agency Name is required."),
  agencyPhone: yup
    .string("Enter the Agency's Phone Number.")
    .required("Agency's Phone Number is required."),
  agencyFax: yup
    .string("Enter the Agency's Fax.")
    .required("Agency's Fax is required."),
  sendApprovedAuth: yup
    .string("Select where to Send Approved Auth.")
    .required("Send Approved Auth is required."),
  clinicalGrouping: yup
    .string("Select the clinical grouping.")
    .required("Clinical Grouping is required."),
});

const initialValues = {
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
  emerContactRelationship: "",
  emergencyContactName: "",
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
  dateOfDischarge: "",
  primaryDiagnosis: "",
  primaryDiagnosisCode: "",
  pastMedicalHistory: "",
  source: "",
  sourceName: "",
  sourceNPI: "",
  sourceContact: "",
  sourcePhone: "",
  sourceFax: "",
  acceptingAgency: "",
  AgencyName: "",
  agencyEmail: "",
  agencyContactName: "",
  agencyPhone: "",
  agencyFax: "",
  sendApprovedAuth: "",
  clinicalGrouping: "",
  LovenoxInjections: false,
  FeedingTube: false,
  LeftVentricularAssistDevice: false,
  Tracheostomy: false,
  speechTherapy: false,
  skilledNursing: false,
  physicalTherapy: false,
  occupationalTherapy: false,
  homeHealthAide: false,
  medicalSocialWorker: false,
  nurseToOpen: false,
  healthCareSigned: false,
  supportingClinicalDocumentation: false,
  HP: false,
  InpatientDischargeSummary: false,
  notesFromHospital: false,
  mdOfficeNotes: false,
  woundCareNotes: false,
};

export { validationSchema, initialValues };
