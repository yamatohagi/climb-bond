// @mui
import { Typography, TextField, Stack } from '@mui/material';

// ----------------------------------------------------------------------

export default function PaymentBillingAddress() {
  return (
    // @ts-expect-error TS(2304): Cannot find name 'div'.
    <div>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h5">Billing Address</Typography>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={2.5} mt={5}>
        // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
        <TextField fullWidth label="Person name" />
        // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
        <TextField fullWidth label="Phone number" />
        // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
        <TextField fullWidth label="Email" />
        // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
        <TextField fullWidth label="Address" />
      </Stack>
    </div>
  );
}
