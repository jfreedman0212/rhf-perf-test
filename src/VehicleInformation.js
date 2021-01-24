import React from 'react';
import { useFormContext } from 'react-hook-form';
import BaseFormSection from './BaseFormSection';

function VehicleInformation() {
    const { register } = useFormContext();
    const [vehicleIds, setVehicleIds] = React.useState([]);
    const [currentId, setCurrentId] = React.useState(0);

    function addNewVehicle() {
        setVehicleIds(previousVehicleIds => [...previousVehicleIds, currentId]);
        setCurrentId(previousId => previousId + 1);
    }

    function removeVehicle(idToRemove) {
        return () => setVehicleIds(
            previousVehicleIds => previousVehicleIds.filter(id => id !== idToRemove)
        );
    }

    return (
        <>
            {
                vehicleIds.map((id, index) => (
                    <BaseFormSection key={id} header={`Vehicle ${index + 1} of ${vehicleIds.length}`}>
                        <label>
                            Make<br />
                            <input type="text" name={`vehicles[${index}].make`} ref={register} />
                        </label>
                        <label>
                            Model<br />
                            <input type="text" name={`vehicles[${index}].model`} ref={register} />
                        </label>
                        <label>
                            Year<br />
                            <input type="text" name={`vehicles[${index}].year`} ref={register} />
                        </label>
                        <label>
                            License Number<br />
                            <input type="text" name={`vehicles[${index}].licenseNumber`} ref={register} />
                        </label>
                        <label>
                            State<br />
                            <input type="text" name={`vehicles[${index}].state`} ref={register} />
                        </label>
                        <button type="button" onClick={removeVehicle(id)}>Delete</button>
                    </BaseFormSection>
                ))
            }
            <button type="button" onClick={addNewVehicle}>Add Vehicle</button>
        </>
    );
}

export default VehicleInformation;
