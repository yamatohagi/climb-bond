// next
import Head from 'next/head';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/compact' or its co... Remove this comment to see the full error message
import CompactLayout from 'src/layouts/compact';
// sections
// @ts-expect-error TS(2307): Cannot find module 'src/sections/error/view' or it... Remove this comment to see the full error message
import { Error404View } from 'src/sections/error/view';

// ----------------------------------------------------------------------

Page404.getLayout = (page: any) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Head>
        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <title>404 Page Not Found | ZONE UI</title>
      </Head>

      <Error404View />
    </>
  );
}
