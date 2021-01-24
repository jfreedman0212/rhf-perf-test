import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import BaseFormSection from './BaseFormSection';

function VehicleInformation() {
    const { register } = useFormContext();
    const { fields, append, remove } = useFieldArray({ name: 'vehicles' });

    function addNewVehicle() {
        append({
            make: '',
            model: '',
            year: '',
            licenseNumber: '',
            state: '',
        });
    }

    function removeVehicle(index) {
        return () => remove(index);
    }

    return (
        <>
            {
                fields.map((vehicle, index) => (
                    <BaseFormSection key={vehicle.id} header={`Vehicle ${index + 1} of ${fields.length}`}>
                        <label>
                            Make<br />
                            <input type="text" name={`vehicles[${index}].make`} ref={register()} />
                        </label>
                        <label>
                            Model<br />
                            <input type="text" name={`vehicles[${index}].model`} ref={register()} />
                        </label>
                        <label>
                            Year<br />
                            <input type="text" name={`vehicles[${index}].year`} ref={register()} />
                        </label>
                        <label>
                            License Number<br />
                            <input type="text" name={`vehicles[${index}].licenseNumber`} ref={register()} />
                        </label>
                        <label>
                            State<br />
                            <input type="text" name={`vehicles[${index}].state`} ref={register()} />
                        </label>
                        <button type="button" onClick={removeVehicle(index)}>Delete</button>
                    </BaseFormSection>
                ))
            }
            <button type="button" onClick={addNewVehicle}>Add Vehicle</button>
        </>
    );
}

export default VehicleInformation;
