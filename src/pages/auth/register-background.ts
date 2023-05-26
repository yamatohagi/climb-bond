// next
import Head from 'next/head';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/simple' or its cor... Remove this comment to see the full error message
import SimpleLayout from 'src/layouts/simple';
// sections
// @ts-expect-error TS(2307): Cannot find module 'src/sections/auth/view' or its... Remove this comment to see the full error message
import { RegisterBackgroundView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

RegisterBackgroundPage.getLayout = (page: any) => <SimpleLayout>{page}</SimpleLayout>;

// ----------------------------------------------------------------------

export default function RegisterBackgroundPage() {
  return (
    <>
      // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Head>
        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <title>Register Background | ZONE UI</title>
      </Head>

      <RegisterBackgroundView />
    </>
  );
}
