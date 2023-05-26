// next
import NextLink from 'next/link';
// @mui
import { Link, Typography } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import { AuthVerifyCodeForm } from '../components';

// ----------------------------------------------------------------------

export default function VerifyCodeView() {
  return (
    <>
      <Image
        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        alt="email inbox"
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        src="/assets/icons/ic_email_inbox.svg"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ mb: 5, width: 96, height: 96, mx: 'auto' }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="h3">Check Your Email</Typography>

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="body2" sx={{ mt: 2, mb: 5, color: 'text.secondary' }}>
        // @ts-expect-error TS(2304): Cannot find name 'We'.
        We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below
        // @ts-expect-error TS(2304): Cannot find name 'box'.
        box to verify your email.
      </Typography>

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <AuthVerifyCodeForm />

      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        // @ts-expect-error TS(2349): This expression is not callable.
        {`Don’t have a code? `}
        // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Link variant="subtitle2" underline="none">
          // @ts-expect-error TS(2304): Cannot find name 'Resend'.
          Resend code
        </Link>
      </Typography>

      <Link
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component={NextLink}
        // @ts-expect-error TS(2304): Cannot find name 'href'.
        href={paths.loginCover}
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color="inherit"
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="subtitle2"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mt: 3,
          // @ts-expect-error TS(2304): Cannot find name 'mx'.
          mx: 'auto',
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'inline-flex',
        }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="carbon:chevron-left" width={16} sx={{ mr: 1 }} />
        // @ts-expect-error TS(2304): Cannot find name 'Return'.
        Return to sign in
      </Link>
    </>
  );
}
