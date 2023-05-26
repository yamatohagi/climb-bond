// @mui
import { Typography, Stack, Link } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function ContactMarketingInfo() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={3}>
      {isMdUp && (
        <Image
          // @ts-expect-error TS(2304): Cannot find name 'alt'.
          alt="marketing contact"
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          src="/assets/illustrations/illustration_marketing_contact.svg"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ maxWidth: 380 }}
        />
      )}

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2} direction="row" alignItems="flex-start">
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="carbon:location" width={28} />

        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={0.5}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={1} direction="row" alignItems="center">
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h6">Visit us</Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Link sx={{ lineHeight: 0 }}>
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              <Iconify icon="carbon:launch" width={18} />
            </Link>
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2">508 Bridle Avenue Newnan, GA 30263e</Typography>
        </Stack>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={2} alignItems="flex-start" direction="row">
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        <Iconify width={28} icon="carbon:mobile" />
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={0.5}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h6">Call us</Typography>
        </Stack>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={2} alignItems="flex-start" direction="row">
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        <Iconify width={28} icon="carbon:email" />
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={0.5}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h6">Talk to us</Typography>
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          <Link color="inherit" variant="body2" href="mailto:hello@example.com">
            // @ts-expect-error TS(2304): Cannot find name 'hello'.
            hello@example.com
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Link>
        </Stack>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={2} alignItems="flex-start" direction="row">
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        <Iconify width={28} icon="carbon:time" />
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={0.5}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h6">Working Hours</Typography>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2">Mon-Fri: 9 am — 6 pm</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
