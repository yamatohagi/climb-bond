// @mui
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
//
import { EcommerceProductItemBestSellers } from '../item';

// ----------------------------------------------------------------------

export default function EcommerceProductListBestSellers({
  products
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={3}>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h6">Best Sellers</Typography>

      // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceProductItemBestSell... Remove this comment to see the full error message
      {products.slice(0, 8).map((product: any) => <EcommerceProductItemBestSellers key={product.id} product={product} />)}
    </Stack>
  );
}

EcommerceProductListBestSellers.propTypes = {
  products: PropTypes.array,
};
