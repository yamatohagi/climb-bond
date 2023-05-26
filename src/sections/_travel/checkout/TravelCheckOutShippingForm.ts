import PropTypes from 'prop-types';
// @mui
import { Stack, Switch, Collapse, Typography, FormControlLabel } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/hook-form' or i... Remove this comment to see the full error message
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function TravelCheckOutShippingForm({
  sameBilling,
  onChangeSameBilling
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={5}>
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="overline" sx={{ color: 'text.secondary', mb: 3, display: 'block' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Billing'.
          Billing Address
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={2.5}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
            // @ts-expect-error TS(2304): Cannot find name 'label'.
            <RHFTextField name="billingAddress.firstName" label="First Name" />
            // @ts-expect-error TS(2304): Cannot find name 'label'.
            <RHFTextField name="billingAddress.lastName" label="Last Name" />
          </Stack>
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          <RHFTextField name="billingAddress.fullAddress" label="Full Address" />
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          <RHFTextField name="billingAddress.fullAddress2" label="Full Address2" />
        </Stack>
      </div>

      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={3}
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={{ xs: 'column', md: 'row' }}
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent={{ md: 'space-between' }}
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Shipping'.
            Shipping Address
          </Typography>
          <FormControlLabel
            // @ts-expect-error TS(2304): Cannot find name 'control'.
            control={<Switch checked={sameBilling} onChange={onChangeSameBilling} />}
            // @ts-expect-error TS(2304): Cannot find name 'label'.
            label="Same as Billing Address"
            // @ts-expect-error TS(2304): Cannot find name 'labelPlacement'.
            labelPlacement="start"
          />
        </Stack>

        <Collapse
          // @ts-expect-error TS(2304): Cannot find name 'sameBilling'.
          in={!sameBilling}
          // @ts-expect-error TS(2304): Cannot find name 'unmountOnExit'.
          unmountOnExit
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            ...(!sameBilling && { mt: 3 }),
          }}
        >
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={2.5}>
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
              // @ts-expect-error TS(2304): Cannot find name 'label'.
              <RHFTextField name="shippingAddress.firstName" label="First Name" />
              // @ts-expect-error TS(2304): Cannot find name 'label'.
              <RHFTextField name="shippingAddress.lastName" label="Last Name" />
            </Stack>
            // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
            <RHFTextField name="shippingAddress.fullAddress" label="Full Address" />
            // @ts-expect-error TS(2304): Cannot find name 'label'.
            <RHFTextField name="shippingAddress.fullAddress2" label="Full Address2" />
          </Stack>
        </Collapse>
      </div>
    </Stack>
  );
}

TravelCheckOutShippingForm.propTypes = {
  onChangeSameBilling: PropTypes.func,
  sameBilling: PropTypes.bool,
};
