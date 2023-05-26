//
import NewsletterMarketing from '../../newsletter/marketing';
import { MarketingLandingFreeSEO } from '../landing';
import ContactMarketing from '../../contact/marketing';

// ----------------------------------------------------------------------

export default function MarketingContactView() {
  return (
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(2749): 'ContactMarketing' refers to a value, but is being... Remove this comment to see the full error message
      <ContactMarketing />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <MarketingLandingFreeSEO />

      // @ts-expect-error TS(2709): Cannot use namespace 'NewsletterMarketing' as a ty... Remove this comment to see the full error message
      <NewsletterMarketing />
    </>
  );
}
