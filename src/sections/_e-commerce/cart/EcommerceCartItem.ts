import PropTypes from 'prop-types';
// @mui
import { Stack, TextField, IconButton, Typography } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceCartItem({
  product,
  wishlist
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems="center"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: 3,
        // @ts-expect-error TS(2304): Cannot find name 'minWidth'.
        minWidth: 720,
        // @ts-expect-error TS(2304): Cannot find name 'borderBottom'.
        borderBottom: (theme: any) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack direction="row" alignItems="center" flexGrow={1}>
        <Image
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          src={product.coverImg}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            width: 80,
            // @ts-expect-error TS(2304): Cannot find name 'height'.
            height: 80,
            // @ts-expect-error TS(2304): Cannot find name 'flexShrink'.
            flexShrink: 0,
            // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
            borderRadius: 1.5,
            // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
            bgcolor: 'background.neutral',
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        />

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={0.5} sx={{ p: 2 }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="subtitle2">{product.name}</Typography>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Color'.
            Color: Grey Space
          </Typography>
        </Stack>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Stack sx={{ width: 120 }}>
        // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
        <TextField
          // @ts-expect-error TS(2304): Cannot find name 'select'.
          select
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="small"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="outlined"
          // @ts-expect-error TS(2304): Cannot find name 'SelectProps'.
          SelectProps={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            native: true,
          }}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ width: 80 }}
        // @ts-expect-error TS(2365): Operator '>' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option: any) => <option key={option} value={option}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {option}
          </option>)}
        </TextField>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Stack sx={{ width: 120, typography: 'subtitle2' }}> {fCurrency(product: any.price)} </Stack>

      <IconButton>
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="carbon:trash-can" />
      </IconButton>

      // @ts-expect-error TS(2304): Cannot find name 'wishlist'.
      {wishlist && (
        // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
        <IconButton>
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:shopping-cart-plus" />
        </IconButton>
      )}
    </Stack>
  );
}

EcommerceCartItem.propTypes = {
  product: PropTypes.shape({
    coverImg: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  wishlist: PropTypes.bool,
};
