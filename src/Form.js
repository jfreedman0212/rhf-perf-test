import './Form.css';
import ApplicantInformation from './ApplicantInformation';
import CurrentAddress from './CurrentAddress';
import { FormProvider, useForm } from 'react-hook-form';

function Form() {
  const methods = useForm();

  function submitForm(data) {
    console.log(data);
  }

  function resetForm() {
    methods.reset();
  }

  return (
    <FormProvider {...methods}>
      <form 
        className="Form-container" 
        onSubmit={methods.handleSubmit(submitForm)}
        onReset={resetForm}
      >
        <h1>Rental Application Form</h1>
        <ApplicantInformation />
        <CurrentAddress />
        <div className="Form-buttons">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </FormProvider>
  );
}

export default Form;
