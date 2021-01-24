import React from 'react';
import BaseFormSection from './BaseFormSection';

function CurrentAddress() {
    return (
        <BaseFormSection header="Current Address">
            <label>
                Street Address<br />
                <input type="text" name="streetAddress" />
            </label>
            <label>
                City<br />
                <input type="text" name="city" />
            </label>
            <label>
                State<br /> 
                <input type="text" name="state" />
            </label>
            <label>
                Zip Code<br />
                <input type="text" name="zipCode" />
            </label>            
            <label>
                Date In<br />
                <input type="date" name="dateIn" />
            </label>
            <label>
                Date Out<br />
                <input type="date" name="dateOut" />
            </label>
            <label>
                Monthly Rent<br />
                <input type="number" name="montlyRent" />
            </label>
            <label>
                Reason For Leaving<br />
                <input type="text" name="reasonForLeaving" />
            </label>
        </BaseFormSection>
    );
}

export default CurrentAddress;
