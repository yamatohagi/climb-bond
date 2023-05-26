//
import ContactCareer from '../../contact/career';
import NewsletterCareer from '../../newsletter/career';

// ----------------------------------------------------------------------

export default function CareerContactView() {
  return (
    <>
      // @ts-expect-error TS(2749): 'ContactCareer' refers to a value, but is being us... Remove this comment to see the full error message
      <ContactCareer />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <NewsletterCareer />
    </>
  );
}
