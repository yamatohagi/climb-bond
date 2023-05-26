// @mui
import PropTypes from 'prop-types';
import { Divider, Stack } from '@mui/material';
//
import EcommerceCompareItem from './EcommerceCompareItem';

// ----------------------------------------------------------------------

export default function EcommerceCompareList({
  products
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={{ xs: 1, md: 3 }}
      // @ts-expect-error TS(2552): Cannot find name 'divider'. Did you mean 'Divider'... Remove this comment to see the full error message
      divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {products.map((product: any) => <EcommerceCompareItem key={product.id} product={product} />)}
    </Stack>
  );
}

EcommerceCompareList.propTypes = {
  products: PropTypes.array,
};
