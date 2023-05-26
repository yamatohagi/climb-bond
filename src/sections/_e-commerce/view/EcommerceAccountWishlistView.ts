// next
import NextLink from 'next/link';
// @mui
import { Box, Typography, Button, Stack } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _products } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import { EcommerceAccountLayout } from '../layout';
import { EcommerceCartList } from '../cart';

// ----------------------------------------------------------------------

export default function EcommerceAccountWishlistView() {
  return (
    // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceAccountLayout' as a... Remove this comment to see the full error message
    <EcommerceAccountLayout>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h5" sx={{ mb: 3 }}>
        // @ts-expect-error TS(2304): Cannot find name 'Wishlist'.
        Wishlist
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'wishlist'.
      <EcommerceCartList wishlist products={_products.slice(0, 4)} />

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack alignItems={{ sm: 'flex-end' }} sx={{ mt: 3 }}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={3} sx={{ minWidth: 240 }}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            direction="row"
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems="center"
            // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
            justifyContent="space-between"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ typography: 'h6' }}
          >
            // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
            <Box component="span"> Subtotal</Box>
            // @ts-expect-error TS(2304): Cannot find name '$58'.
            $58.07
          </Stack>

          <Button
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            component={NextLink}
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href={paths.eCommerce.cart}
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="large"
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="inherit"
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="contained"
            // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
            startIcon={<Iconify icon="carbon:shopping-cart-plus" />}
          >
            // @ts-expect-error TS(2304): Cannot find name 'Add'.
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </EcommerceAccountLayout>
  );
}
