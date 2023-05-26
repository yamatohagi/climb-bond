import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Stack, Button, Divider, TextField, Typography, InputAdornment } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency, fPercent } from 'src/utils/formatNumber';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export default function EcommerceCartSummary({
  tax,
  total,
  subtotal,
  shipping,
  discount
}: any) {
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
        border: (theme: any) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h6"> Summary </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={2}>
        // @ts-expect-error TS(2709): Cannot use namespace 'Row' as a type.
        <Row label="Subtotal" value={fCurrency(subtotal: any)} />

        // @ts-expect-error TS(2709): Cannot use namespace 'Row' as a type.
        <Row label="Shipping" value={fCurrency(shipping: any)} />

        // @ts-expect-error TS(2709): Cannot use namespace 'Row' as a type.
        <Row label="Discount (15%)" value={`-${fCurrency(discount)}`} />

        // @ts-expect-error TS(2304): Cannot find name 'label'.
        <Row label="Tax" value={fPercent(tax: any)} />
      </Stack>

      <TextField
        // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
        hiddenLabel
        // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
        placeholder="Discount Code"
        // @ts-expect-error TS(2304): Cannot find name 'InputProps'.
        InputProps={{
          endAdornment: (
            // @ts-expect-error TS(2749): 'InputAdornment' refers to a value, but is being u... Remove this comment to see the full error message
            <InputAdornment position="end">
              // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
              <Button>Apply</Button>
            </InputAdornment>
          ),
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed' }} />

      <Row
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label="Total"
        // @ts-expect-error TS(2304): Cannot find name 'value'.
        value={fCurrency(total: any)}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          typography: 'h6',
          '& span': { typography: 'h6' },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      <Button
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component={NextLink}
        // @ts-expect-error TS(2304): Cannot find name 'href'.
        href={paths.eCommerce.checkout}
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        size="large"
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="contained"
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color="inherit"
      >
        // @ts-expect-error TS(2304): Cannot find name 'Checkout'.
        Checkout
      </Button>
    </Stack>
  );
}

EcommerceCartSummary.propTypes = {
  discount: PropTypes.number,
  shipping: PropTypes.number,
  subtotal: PropTypes.number,
  tax: PropTypes.number,
  total: PropTypes.number,
};

// ----------------------------------------------------------------------

function Row({
  label,
  value,
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems="center"
      // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
      justifyContent="space-between"
      // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
      sx={{ typography: 'subtitle2', ...sx }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box component="span" sx={{ typography: 'body2' }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {label}
      </Box>
      // @ts-expect-error TS(2304): Cannot find name 'value'.
      {value}
    </Stack>
  );
}

Row.propTypes = {
  label: PropTypes.string,
  sx: PropTypes.object,
  value: PropTypes.string,
};
