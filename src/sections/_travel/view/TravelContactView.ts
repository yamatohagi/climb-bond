//
import NewsletterTravel from '../../newsletter/travel';
import ContactTravel from '../../contact/travel';

// ----------------------------------------------------------------------

export default function TravelContactView() {
  return (
    <>
      // @ts-expect-error TS(2749): 'ContactTravel' refers to a value, but is being us... Remove this comment to see the full error message
      <ContactTravel />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <NewsletterTravel />
    </>
  );
}
