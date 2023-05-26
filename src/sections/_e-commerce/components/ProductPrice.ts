import PropTypes from 'prop-types';
// @mui
import { Stack, Box } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency } from 'src/utils/formatNumber';

// ----------------------------------------------------------------------

export default function ProductPrice({
  price,
  priceSale = 0,
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack direction="row" sx={{ typography: 'subtitle2', ...sx }} {...other}>
      {fCurrency(price: any)}

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component="span"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ml: 0.5,
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color: 'text.disabled',
          // @ts-expect-error TS(2304): Cannot find name 'textDecoration'.
          textDecoration: 'line-through',
          // @ts-expect-error TS(2304): Cannot find name 'fontWeight'.
          fontWeight: 'fontWeightMedium',
        }}
      // @ts-expect-error TS(2365): Operator '>' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {priceSale > 0 && fCurrency(priceSale)}
      </Box>
    </Stack>
  );
}

ProductPrice.propTypes = {
  price: PropTypes.number,
  priceSale: PropTypes.number,
  sx: PropTypes.object,
};
