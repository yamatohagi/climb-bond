// @mui
import { Box } from '@mui/material';
// assets
// @ts-expect-error TS(2307): Cannot find module 'src/assets/data' or its corres... Remove this comment to see the full error message
import { countries } from 'src/assets/data';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/hook-form' or i... Remove this comment to see the full error message
import { RHFTextField, RHFSelect } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutShippingDetails() {
  return (
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
    >
      // @ts-expect-error TS(2304): Cannot find name 'label'.
      <RHFTextField name="streetAddress" label="Street address" />

      // @ts-expect-error TS(2304): Cannot find name 'label'.
      <RHFTextField name="zipCode" label="ZIP Code" />

      // @ts-expect-error TS(2304): Cannot find name 'label'.
      <RHFTextField name="city" label="City" />

      // @ts-expect-error TS(2304): Cannot find name 'native'.
      <RHFSelect native name="country" label="Country">
        // @ts-expect-error TS(2304): Cannot find name 'option'.
        <option value="" />
        // @ts-expect-error TS(2304): Cannot find name 'option'.
        {countries.map((country: any) => <option key={country.code} value={country.label}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {country.label}
        </option>)}
      </RHFSelect>
    </Box>
  );
}
