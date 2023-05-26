import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { alpha } from '@mui/material/styles';
import { Radio, Stack, RadioGroup, FormControlLabel, Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/hook-form' or i... Remove this comment to see the full error message
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

const PAYMENT_OPTIONS = [
  {
    label: 'Paypal',
    value: 'paypal',
    description: 'You will be redirected to PayPal website to complete your purchase securely.',
  },
  {
    label: 'Credit / Debit',
    value: 'creditcard',
    description: 'We support Mastercard, Visa, Discover and Stripe.',
  },
];

// ----------------------------------------------------------------------

export default function TravelCheckOutPaymentForm() {
  const { control } = useFormContext();

  return (
    // @ts-expect-error TS(2749): 'Controller' refers to a value, but is being used ... Remove this comment to see the full error message
    <Controller
      name="paymentMethods.methods"
      // @ts-expect-error TS(2588): Cannot assign to 'control' because it is a constan... Remove this comment to see the full error message
      control={control}
      // @ts-expect-error TS(2304): Cannot find name 'render'.
      render={({ field }) => (
        // @ts-expect-error TS(2749): 'RadioGroup' refers to a value, but is being used ... Remove this comment to see the full error message
        <RadioGroup {...field}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={3}>
            {PAYMENT_OPTIONS.map((option: any, index: any) => (
              // @ts-expect-error TS(2709): Cannot use namespace 'OptionItem' as a type.
              <OptionItem
                // @ts-expect-error TS(2304): Cannot find name 'key'.
                key={index}
                // @ts-expect-error TS(2552): Cannot find name 'option'. Did you mean 'Option'?
                option={option}
                // @ts-expect-error TS(2304): Cannot find name 'selected'.
                selected={option.value === field.value}
                // @ts-expect-error TS(2304): Cannot find name 'isCredit'.
                isCredit={option.value === 'creditcard' && option.value === field.value}
              />
            ))}
          </Stack>
        </RadioGroup>
      )}
    />
  );
}

// ----------------------------------------------------------------------

function OptionItem({
  option,
  isCredit,
  selected
}: any) {
  const { value, label, description } = option;

  const renderLabel = (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack direction="row" alignItems="center">
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={0.5} flexGrow={1}>
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box component="span" sx={{ typography: 'subtitle1' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {label}
        </Box>

        // @ts-expect-error TS(2304): Cannot find name 'component'.
        <Box component="span" sx={{ typography: 'caption', color: 'text.secondary' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {description}
        </Box>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1} direction="row" alignItems="center">
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {value === 'creditcard' ? (
          <>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="logos:mastercard" width={24} />,
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="logos:visa" width={24} />
          </>
        ) : (
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="logos:paypal" width={24} />
        )}
      </Stack>
    </Stack>
  );

  return (
    <Box
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        borderRadius: 1,
        // @ts-expect-error TS(2304): Cannot find name 'border'.
        border: (theme: any) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(selected && {
          boxShadow: (theme: any) => `0 0 0 2px ${theme.palette.text.primary}`,
        }),
      }}
    >
      // @ts-expect-error TS(2749): 'FormControlLabel' refers to a value, but is being... Remove this comment to see the full error message
      <FormControlLabel
        // @ts-expect-error TS(2304): Cannot find name 'value'.
        value={value}
        // @ts-expect-error TS(2304): Cannot find name 'control'.
        control={
          <Radio
            // @ts-expect-error TS(2304): Cannot find name 'disableRipple'.
            disableRipple
            // @ts-expect-error TS(2304): Cannot find name 'checkedIcon'.
            checkedIcon={<Iconify width={24} icon="carbon:checkmark-outline" />}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ mx: 1 }}
          />
        }
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label={renderLabel}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          m: 0,
          // @ts-expect-error TS(2304): Cannot find name 'py'.
          py: 2,
          // @ts-expect-error TS(2304): Cannot find name 'pr'.
          pr: 2.5,
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width: 1,
          '& .MuiFormControlLabel-label': {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            width: 1,
          },
        }}
      />

      // @ts-expect-error TS(2304): Cannot find name 'isCredit'.
      {isCredit && <NewCardForm />}
    </Box>
  );
}

OptionItem.propTypes = {
  isCredit: PropTypes.bool,
  option: PropTypes.shape({
    description: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  selected: PropTypes.bool,
};

// ----------------------------------------------------------------------

function NewCardForm() {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={2.5} sx={{ px: 3, pb: 3 }}>
      <RHFTextField
        name="paymentMethods.card.cardNumber"
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label="Card Number"
        // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
        placeholder="XXXX XXXX XXXX XXXX"
      />

      <RHFTextField
        name="paymentMethods.card.cardHolder"
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label="Card Holder"
        // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
        placeholder="JOHN DOE"
      />

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2} direction="row">
        <RHFTextField
          name="paymentMethods.card.expirationDate"
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          label="Expiration Date"
          // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
          placeholder="MM/YY"
        />
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        <RHFTextField name="paymentMethods.card.ccv" label="CVV/CVC" placeholder="***" />
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
