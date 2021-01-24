import React from 'react';
import { useFormContext } from 'react-hook-form';
import BaseFormSection from './BaseFormSection';

function CurrentAddress() {
    const { register } = useFormContext();
    return (
        <BaseFormSection header="Current Address">
            <label>
                Street Address<br />
                <input type="text" name="streetAddress" ref={register} />
            </label>
            <label>
                City<br />
                <input type="text" name="city" ref={register} />
            </label>
            <label>
                State<br /> 
                <input type="text" name="state" ref={register} />
            </label>
            <label>
                Zip Code<br />
                <input type="text" name="zipCode" ref={register} />
            </label>            
            <label>
                Date In<br />
                <input type="date" name="dateIn" ref={register} />
            </label>
            <label>
                Date Out<br />
                <input type="date" name="dateOut" ref={register} />
            </label>
            <label>
                Monthly Rent<br />
                <input type="number" name="montlyRent" ref={register} />
            </label>
            <label>
                Reason For Leaving<br />
                <input type="text" name="reasonForLeaving" ref={register} />
            </label>
        </BaseFormSection>
    );
}

export default CurrentAddress;
