import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Stack, Radio, RadioGroup, FormControlLabel } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutPaymentMethod({
  options
}: any) {
  const { control } = useFormContext();

  return (
    // @ts-expect-error TS(2749): 'Controller' refers to a value, but is being used ... Remove this comment to see the full error message
    <Controller
      name="paymentMethods"
      // @ts-expect-error TS(2588): Cannot assign to 'control' because it is a constan... Remove this comment to see the full error message
      control={control}
      // @ts-expect-error TS(2304): Cannot find name 'render'.
      render={({ field }) => (
        // @ts-expect-error TS(2749): 'RadioGroup' refers to a value, but is being used ... Remove this comment to see the full error message
        <RadioGroup {...field}>
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box
            // @ts-expect-error TS(2304): Cannot find name 'rowGap'.
            rowGap={2.5}
            // @ts-expect-error TS(2304): Cannot find name 'columnGap'.
            columnGap={2}
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display="grid"
            // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          >
            // @ts-expect-error TS(2552): Cannot find name 'options'. Did you mean 'Option'?
            {options.map((option: any) => <OptionItem
              // @ts-expect-error TS(2304): Cannot find name 'key'.
              key={option.value}
              // @ts-expect-error TS(2304): Cannot find name 'option'.
              option={option}
              // @ts-expect-error TS(2304): Cannot find name 'selected'.
              selected={field.value === option.value}
            />)}
          </Box>
        </RadioGroup>
      )}
    />
  );
}

EcommerceCheckoutPaymentMethod.propTypes = {
  options: PropTypes.array,
};

// ----------------------------------------------------------------------

function OptionItem({
  option,
  selected
}: any) {
  const { value, label, description } = option;

  const renderLabel = (
    // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
    <Stack flexGrow={1} spacing={0.5} sx={{ width: 1 }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack direction="row" alignItems="center">
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box component="span" sx={{ typography: 'subtitle1', flexGrow: 1 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {label}
        </Box>

        <Iconify
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          icon={
            // @ts-expect-error TS(2304): Cannot find name 'value'.
            (value === 'visa' && 'logos:visa') ||
            // @ts-expect-error TS(2304): Cannot find name 'value'.
            (value === 'mastercard' && 'logos:mastercard') ||
            'logos:paypal'
          }
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width={24}
        />
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'component'.
      <Box component="span" sx={{ typography: 'body2' }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {description}
      </Box>
    </Stack>
  );

  return (
    <FormControlLabel
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
        py: 3,
        // @ts-expect-error TS(2304): Cannot find name 'pr'.
        pr: 2,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 1,
        // @ts-expect-error TS(2304): Cannot find name 'border'.
        border: (theme: any) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(selected && {
          boxShadow: (theme: any) => `0 0 0 2px ${theme.palette.text.primary}`,
        }),
        '& .MuiFormControlLabel-label': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: 1,
        },
      }}
    />
  );
}

OptionItem.propTypes = {
  option: PropTypes.shape({
    description: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  selected: PropTypes.bool,
};
