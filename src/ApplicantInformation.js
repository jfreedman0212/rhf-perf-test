import React from 'react';
import { useFormContext } from 'react-hook-form';
import BaseFormSection from './BaseFormSection';

function ApplicantInformation() {
    const { register } = useFormContext();
    return (
        <BaseFormSection header="Applicant Information">
            <label>
                First Name<br />
                <input type="text" name="firstName" ref={register} />
            </label>
            <label>
                Middle Initial<br />
                <input type="text" name="middleInitial" ref={register} />
            </label>
            <label>
                Last Name<br /> 
                <input type="text" name="lastName" ref={register} />
            </label>
            <label>
                SSN<br />
                <input type="text" name="socialSecurityNumber" ref={register} />
            </label>            
            <label>
                Driver's License Number<br />
                <input type="text" name="driversLicenseNumber" ref={register} />
            </label>
            <label>
                Date of Birth<br />
                <input type="date" name="dateOfBirth" ref={register} />
            </label>
            <label>
                Phone Number<br />
                <input type="text" name="phoneNumber" ref={register} />
            </label>
            <label>
                Email<br />
                <input type="text" name="email" ref={register} />
            </label>
        </BaseFormSection>
    );
}

export default ApplicantInformation;
