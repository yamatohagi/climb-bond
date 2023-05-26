// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _offices } from 'src/_mock';
//
// @ts-expect-error TS(6142): Module '../map' was resolved to '/Users/yamatohagi... Remove this comment to see the full error message
import ContactMap from '../map';
import ContactCareerInfo from './ContactCareerInfo';
import ContactCareerForm from './ContactCareerForm';

// ----------------------------------------------------------------------

export default function ContactCareer() {
  return (
    <>
      // @ts-expect-error TS(2749): 'ContactCareerInfo' refers to a value, but is bein... Remove this comment to see the full error message
      <ContactCareerInfo />

      // @ts-expect-error TS(2552): Cannot find name 'offices'. Did you mean '_offices... Remove this comment to see the full error message
      <ContactMap offices={_offices} />

      // @ts-expect-error TS(2749): 'ContactCareerForm' refers to a value, but is bein... Remove this comment to see the full error message
      <ContactCareerForm />
    </>
  );
}
