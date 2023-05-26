// @mui
import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/scrollbar' or i... Remove this comment to see the full error message
import Scrollbar from 'src/components/scrollbar';
//
import EcommerceCartItem from './EcommerceCartItem';

// ----------------------------------------------------------------------

export default function EcommerceCartList({
  products,
  wishlist = false
}: any) {
  return (
    <Scrollbar>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        direction="row"
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          py: 2,
          // @ts-expect-error TS(2304): Cannot find name 'minWidth'.
          minWidth: 720,
          // @ts-expect-error TS(2304): Cannot find name 'typography'.
          typography: 'subtitle2',
          // @ts-expect-error TS(2304): Cannot find name 'borderBottom'.
          borderBottom: (theme: any) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack flexGrow={1}>Item</Stack>
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Stack sx={{ width: 120 }}>Qty</Stack>
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Stack sx={{ width: 120 }}>Subtotal</Stack>
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Stack sx={{ width: 36 }} />
        // @ts-expect-error TS(2304): Cannot find name 'wishlist'.
        {wishlist && <Stack sx={{ width: 36 }} />}
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'products'.
      {products.map((product: any) => <EcommerceCartItem key={product.id} product={product} wishlist={wishlist} />)}
    </Scrollbar>
  );
}

EcommerceCartList.propTypes = {
  products: PropTypes.array,
  wishlist: PropTypes.bool,
};
