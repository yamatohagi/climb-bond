// @mui
import { Stack, TextField } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceAccountNewCardForm() {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={2.5}>
      // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
      <TextField
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label="Card Number"
        // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
        placeholder="XXXX XXXX XXXX XXXX"
        // @ts-expect-error TS(2304): Cannot find name 'InputLabelProps'.
        InputLabelProps={{ shrink: true }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'label'.
      <TextField label="Card Holder" placeholder="JOHN DOE" InputLabelProps={{ shrink: true }} />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={2} direction="row">
        // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
        <TextField
          // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
          fullWidth
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          label="Expiration Date"
          // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
          placeholder="MM/YY"
          // @ts-expect-error TS(2304): Cannot find name 'InputLabelProps'.
          InputLabelProps={{ shrink: true }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        />
        // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
        <TextField fullWidth label="CVV/CVC" placeholder="***" InputLabelProps={{ shrink: true }} />
      </Stack>

      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        direction="row"
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ typography: 'caption', color: 'text.disabled' }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="carbon:locked" sx={{ mr: 0.5 }} />
        // @ts-expect-error TS(1101): 'with' statements are not allowed in strict mode.
        Your transaction is secured with SSL encryption
      </Stack>
    </Stack>
  );
}
