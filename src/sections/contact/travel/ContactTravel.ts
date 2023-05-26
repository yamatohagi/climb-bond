//
import ContactTravelInfo from './ContactTravelInfo';
import ContactTravelForm from './ContactTravelForm';

// ----------------------------------------------------------------------

export default function ContactTravel() {
  return (
    <>
      // @ts-expect-error TS(2749): 'ContactTravelInfo' refers to a value, but is bein... Remove this comment to see the full error message
      <ContactTravelInfo />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <ContactTravelForm />
    </>
  );
}
