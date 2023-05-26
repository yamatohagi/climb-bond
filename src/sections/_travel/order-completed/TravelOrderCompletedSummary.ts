import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Divider } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelOrderCompletedSummary() {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={3}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        p: 5,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'border'.
        border: (theme: any) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h5">Booking Details</Typography>

      // @ts-expect-error TS(2304): Cannot find name 'icon'.
      <LineItem icon="carbon:calendar" label="Departure day" value={fDate(new Date: any())} />

      // @ts-expect-error TS(2304): Cannot find name 'icon'.
      <LineItem icon="carbon:events" label="Guests" value="2 guest" />

      // @ts-expect-error TS(2749): 'Divider' refers to a value, but is being used as ... Remove this comment to see the full error message
      <Divider sx={{ borderStyle: 'dashed' }} />

      // @ts-expect-error TS(2304): Cannot find name 'icon'.
      <LineItem icon="carbon:cube" label="Booking code" value="KU_H8SDM" />

      // @ts-expect-error TS(2709): Cannot use namespace 'LineItem' as a type.
      <LineItem icon="carbon:calendar" label="Booking day" value={fDate(new Date: any())} />

      // @ts-expect-error TS(2304): Cannot find name 'icon'.
      <LineItem icon="carbon:receipt" label="Total" value={fCurrency(1112)} />

      // @ts-expect-error TS(2709): Cannot use namespace 'LineItem' as a type.
      <LineItem icon="carbon:purchase" label="Payment method" value="Paypal" />
    </Stack>
  );
}

// ----------------------------------------------------------------------

function LineItem({
  icon,
  label,
  value
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems="center"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ typography: 'body2', color: 'text.secondary' }}
    >
      // @ts-expect-error TS(2304): Cannot find name 'icon'.
      <Iconify icon={icon} width={24} sx={{ mr: 1 }} /> {label}
      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="subtitle2"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ color: 'text.primary', flexGrow: 1, textAlign: 'right' }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {value}
      </Typography>
    </Stack>
  );
}

LineItem.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  value: PropTypes.string,
};
