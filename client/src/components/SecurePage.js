import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControlLabel, Checkbox } from "@mui/material";

const SecurePage = () => {
  const [acknowledge, setAcknowledge] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    if (acknowledge) {
      history("/eligibility", { state: { id: 1, acknowledge: acknowledge } });
    }
  };

  return (
    <div className="container text-center mx-auto p-4 lg:w-5/12 mt-4">
      <h3 className="font-bold text-lg mb-5 text-PHCN-light-blue">
        Welcome to PHCN's Referral Request Site
      </h3>
      <p>
        This is where you will be able to request a referral via PHCN’s secure
        Referral Request form. Within this form, you will be able to check
        eligibility for Home Health services and complete the necessary
        information to request the referral electronically. Once submitted, you
        will receive a confirmation number that you can use to check referral
        status.
      </p>
      <div className="bg-PHCN-light-blue mt-2 py-1 px-4 border border-PHCN-primary">
        <div className="py-2">
          <h3 className="font-bold mb-2">Privacy and Security</h3>
          <p>
            PHCN is committed to maintaining the confidentiality, privacy and
            security of its patients’ protected health information. Consistent
            with the Health Insurance Portability and Accountability Act
            (HIPAA), we do not use, disclose or discuss patient-specific
            information with others unless it is necessary to serve the patient
            or required by law. A copy of our Notice of Privacy Practices is
            provided here. The notice describes how protected health information
            may be used and disclosed and how to access PHI.
          </p>
          <p>
            We are committed to being conscientious and accountable when
            handling confidential company information. In addition, because of
            its confidential nature, business and health information must be
            protected by an effective internal control environment, including
            policies and procedures to secure the company’s assets, and made
            available outside the company only with appropriate authorization
            and after consideration of the interests of PHCN as a whole.
          </p>
        </div>
        <div>
          <h3 className="font-bold my-2">Website Content</h3>
          <p className="mb-5">
            PHCN may change, add or remove some or all of the Content on this
            website at any time. In addition, please note that although our goal
            is to provide accurate information, certain features that may be
            offered through this website, such as participating healthcare
            providers information or other Content, may not be accurate or up to
            date. In addition, please note that features of any plan or plans
            described in this website may change over time as permitted by law,
            including benefit levels, items included in any formulary, pricing
            or lists of participating providers or other associated vendors.
          </p>
        </div>
        <FormControlLabel
          control={
            <Checkbox
              value={acknowledge}
              onChange={() => setAcknowledge(!acknowledge)}
            />
          }
        />
        <div className="inline">I agree</div>
      </div>
      <button
        className="btn primary mt-5 disabled:opacity-25"
        disabled={acknowledge ? false : true}
        onClick={handleSubmit}
      >
        Start
      </button>
    </div>
  );
};

export default SecurePage;
