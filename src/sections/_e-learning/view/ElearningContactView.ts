//
import NewsletterElearning from '../../newsletter/e-learning';
import ContactElearning from '../../contact/e-learning';

// ----------------------------------------------------------------------

export default function ElearningContactView() {
  return (
    <>
      // @ts-expect-error TS(2749): 'ContactElearning' refers to a value, but is being... Remove this comment to see the full error message
      <ContactElearning />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <NewsletterElearning />
    </>
  );
}
