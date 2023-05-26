import PropTypes from 'prop-types';
// @mui
import { Switch, Divider, Typography, Stack, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PaymentSummary({
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        p: 5,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'background.neutral',
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...sx,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h5" sx={{ mb: 5 }}>
        // @ts-expect-error TS(2304): Cannot find name 'Summary'.
        Summary
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={2.5}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Subscription'.
            Subscription
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'color'.
          <Label color="error">PREMIUM</Label>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Billed'.
            Billed Monthly
          </Typography>
          // @ts-expect-error TS(2304): Cannot find name 'defaultChecked'.
          <Switch defaultChecked color="success" />
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1} direction="row" justifyContent="flex-end">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h5">$</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h2">9.99</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'component'.
          <Typography component="span" sx={{ mb: 1, alignSelf: 'center', color: 'text.secondary' }}>
            /mo
          </Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Divider sx={{ borderStyle: 'dashed' }} />

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h6">Total Billed</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h6">$9.99*</Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Divider sx={{ borderStyle: 'dashed' }} />
      </Stack>

      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component="div"
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="caption"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ color: 'text.secondary', mt: 1, textAlign: 'right' }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Plus'.
        * Plus applicable taxes
      </Typography>

      <LoadingButton
        // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
        fullWidth
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        size="large"
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color="inherit"
        // @ts-expect-error TS(2304): Cannot find name 'type'.
        type="submit"
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="contained"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ mt: 5, mb: 3 }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Upgrade'.
        Upgrade My Plan
      </LoadingButton>

      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      <Stack alignItems="center" spacing={1}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack direction="row" alignItems="center" spacing={1}>
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:security" sx={{ color: 'success.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="subtitle2">Secure credit card payment</Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          // @ts-expect-error TS(2304): Cannot find name 'This'.
          This is a secure 128-bit SSL encrypted payment
        </Typography>
      </Stack>
    </Box>
  );
}

PaymentSummary.propTypes = {
  sx: PropTypes.object,
};
