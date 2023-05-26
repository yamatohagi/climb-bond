// next
import Head from 'next/head';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/compact' or its co... Remove this comment to see the full error message
import CompactLayout from 'src/layouts/compact';
// sections
// @ts-expect-error TS(2307): Cannot find module 'src/sections/status/view' or i... Remove this comment to see the full error message
import { ComingSoonView } from 'src/sections/status/view';

// ----------------------------------------------------------------------

ComingSoonPage.getLayout = (page: any) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function ComingSoonPage() {
  return (
    <>
      // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Head>
        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <title>Coming Soon | ZONE UI</title>
      </Head>

      <ComingSoonView />
    </>
  );
}
