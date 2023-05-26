//
import ContactElearningInfo from './ContactElearningInfo';
import ContactElearningForm from './ContactElearningForm';

// ----------------------------------------------------------------------

export default function ContactElearning() {
  return (
    <>
      // @ts-expect-error TS(2749): 'ContactElearningInfo' refers to a value, but is b... Remove this comment to see the full error message
      <ContactElearningInfo />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <ContactElearningForm />
    </>
  );
}
