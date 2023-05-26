import PropTypes from 'prop-types';
// @mui
import { Box, Stack, Pagination } from '@mui/material';
//
import {
  EcommerceProductViewListItem,
  EcommerceProductViewGridItem,
  EcommerceProductViewListItemSkeleton,
  EcommerceProductViewGridItemSkeleton,
} from '../item';

// ----------------------------------------------------------------------

export default function EcommerceProductList({
  loading,
  viewMode,
  products
}: any) {
  return <>
    {viewMode === 'grid' ? (
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'rowGap'.
        rowGap={4}
        // @ts-expect-error TS(2304): Cannot find name 'columnGap'.
        columnGap={3}
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display="grid"
        // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
        gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
      >
        // @ts-expect-error TS(2349): This expression is not callable.
        {(loading ? [...Array(16)] : products).map((product: any, index: any) =>
          product ? (
            // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceProductViewGridItem... Remove this comment to see the full error message
            <EcommerceProductViewGridItem key={product.id} product={product} />
          ) : (
            // @ts-expect-error TS(2749): 'EcommerceProductViewGridItemSkeleton' refers to a... Remove this comment to see the full error message
            <EcommerceProductViewGridItemSkeleton key={index} />
          )
        )}
      </Box>
    ) : (
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={4}>
        // @ts-expect-error TS(2349): This expression is not callable.
        {(loading ? [...Array(16)] : products).map((product: any, index: any) =>
          product ? (
            // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceProductViewListItem... Remove this comment to see the full error message
            <EcommerceProductViewListItem key={product.id} product={product} />
          ) : (
            // @ts-expect-error TS(2749): 'EcommerceProductViewListItemSkeleton' refers to a... Remove this comment to see the full error message
            <EcommerceProductViewListItemSkeleton key={index} />
          )
        )}
      </Stack>
    )}

    // @ts-expect-error TS(2749): 'Pagination' refers to a value, but is being used ... Remove this comment to see the full error message
    <Pagination
      // @ts-expect-error TS(2304): Cannot find name 'count'.
      count={10}
      // @ts-expect-error TS(2304): Cannot find name 'color'.
      color="primary"
      // @ts-expect-error TS(2304): Cannot find name 'size'.
      size="large"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        mt: 10,
        // @ts-expect-error TS(2304): Cannot find name 'mb'.
        mb: 5,
        '& .MuiPagination-ul': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          justifyContent: 'center',
        },
      }}
    />
  </>;
}

EcommerceProductList.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.array,
  viewMode: PropTypes.string,
};
