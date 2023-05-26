// @mui
import { Stack } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/hook-form' or i... Remove this comment to see the full error message
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutNewCardForm() {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={2.5} sx={{ pt: 3 }}>
      <RHFTextField
        name="newCard.cardNumber"
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label="Card Number"
        // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
        placeholder="XXXX XXXX XXXX XXXX"
        // @ts-expect-error TS(2304): Cannot find name 'InputLabelProps'.
        InputLabelProps={{ shrink: true }}
      />

      <RHFTextField
        // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
        name="newCard.cardHolder"
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label="Card Holder"
        // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
        placeholder="JOHN DOE"
        // @ts-expect-error TS(2304): Cannot find name 'InputLabelProps'.
        InputLabelProps={{ shrink: true }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={2} direction="row">
        <RHFTextField
          name="newCard.expirationDate"
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          label="Expiration Date"
          // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
          placeholder="MM/YY"
          // @ts-expect-error TS(2304): Cannot find name 'InputLabelProps'.
          InputLabelProps={{ shrink: true }}
        />
        <RHFTextField
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="newCard.ccv"
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          label="CVV/CVC"
          // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
          placeholder="***"
          // @ts-expect-error TS(2304): Cannot find name 'InputLabelProps'.
          InputLabelProps={{ shrink: true }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
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
