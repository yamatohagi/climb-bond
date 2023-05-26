// @mui
import { Box, Stack, Button, Divider, Typography } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock from 'src/_mock';
//
import { EcommerceAccountLayout } from '../layout';
import { EcommerceAccountPaymentCard, EcommerceAccountNewCardForm } from '../account/payment';

// ----------------------------------------------------------------------

const CARD_OPTIONS = [
  {
    id: _mock.id(1),
    value: 'paypal',
    label: 'Paypal',
    cardNumber: '2904 1902 1802 1234',
    cardHolder: _mock.name.fullName(1),
    expirationDate: '08/24',
    isPrimary: false,
  },
  {
    id: _mock.id(2),
    value: 'mastercard',
    label: 'Mastercard',
    cardNumber: '2904 1902 1802 5678',
    cardHolder: _mock.name.fullName(2),
    expirationDate: '08/24',
    isPrimary: true,
  },
  {
    id: _mock.id(3),
    value: 'visa',
    label: 'Visa',
    cardNumber: '2904 1902 1802 7890',
    cardHolder: _mock.name.fullName(3),
    expirationDate: '08/24',
    isPrimary: false,
  },
];

// ----------------------------------------------------------------------

export default function EcommerceAccountPaymentView() {
  return (
    // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceAccountLayout' as a... Remove this comment to see the full error message
    <EcommerceAccountLayout>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={5}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={3}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h5">Payment Method</Typography>

          <Box
            // @ts-expect-error TS(2304): Cannot find name 'gap'.
            gap={3}
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display="grid"
            // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          >
            // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceAccountPaymentCard'... Remove this comment to see the full error message
            {CARD_OPTIONS.map((card: any) => <EcommerceAccountPaymentCard key={card.id} card={card} />)}
          </Box>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={3}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h5">Add New Card</Typography>

          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          <EcommerceAccountNewCardForm />

          // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Button color="inherit" size="large" variant="contained" sx={{ alignSelf: 'flex-end' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Save'.
            Save
          </Button>
        </Stack>
      </Stack>
    </EcommerceAccountLayout>
  );
}
