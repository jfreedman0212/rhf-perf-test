import React from 'react';
import BaseFormSection from './BaseFormSection';

function ApplicantInformation() {
    return (
        <BaseFormSection header="Applicant Information">
            <label>
                First Name<br />
                <input type="text" name="firstName" />
            </label>
            <label>
                Middle Initial<br />
                <input type="text" name="middleInitial" />
            </label>
            <label>
                Last Name<br /> 
                <input type="text" name="lastName" />
            </label>
            <label>
                SSN<br />
                <input type="text" name="socialSecurityNumber" />
            </label>            
            <label>
                Driver's License Number<br />
                <input type="text" name="driversLicenseNumber" />
            </label>
            <label>
                Date of Birth<br />
                <input type="date" name="dateOfBirth" />
            </label>
            <label>
                Phone Number<br />
                <input type="text" name="phoneNumber" />
            </label>
            <label>
                Email<br />
                <input type="text" name="email" />
            </label>
        </BaseFormSection>
    );
}

export default ApplicantInformation;
