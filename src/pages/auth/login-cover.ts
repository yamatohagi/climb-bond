// next
import Head from 'next/head';
// sections
// @ts-expect-error TS(2307): Cannot find module 'src/sections/auth/view' or its... Remove this comment to see the full error message
import { LoginCoverView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

export default function LoginCoverPage() {
  return (
    <>
      // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Head>
        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <title>Login Cover | ZONE UI</title>
      </Head>

      <LoginCoverView />
    </>
  );
}
