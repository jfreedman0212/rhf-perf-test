import './Form.css';
import ApplicantInformation from './ApplicantInformation';
import CurrentAddress from './CurrentAddress';

function Form() {
  return (
    <form className="Form-container">
      <h1>Rental Application Form</h1>
      <ApplicantInformation />
      <CurrentAddress />
      <div className="Form-buttons">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
