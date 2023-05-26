import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Rating, Button } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency } from 'src/utils/formatNumber';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function EcommerceCompareItem({
  product
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
      <Image
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        src={product.coverImg}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          flexShrink: 0,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: 1.5,
          // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
          bgcolor: 'background.neutral',
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      <Stack alignItems="center" spacing={1}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="subtitle2"> {product.name} </Typography>
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="h6"> {fCurrency(product: any.price)} </Typography>
        <Rating
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="small"
          // @ts-expect-error TS(2304): Cannot find name 'readOnly'.
          readOnly
          // @ts-expect-error TS(2304): Cannot find name 'value'.
          value={product.rating}
          // @ts-expect-error TS(2304): Cannot find name 'precision'.
          precision={0.5}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            '& svg': {
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              width: { xs: 12, md: 20 },
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              height: { xs: 12, md: 20 },
            },
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </Stack>

      <Button
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component={NextLink}
        // @ts-expect-error TS(2304): Cannot find name 'href'.
        href={paths.eCommerce.cart}
        // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
        fullWidth
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        size="large"
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color="inherit"
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="contained"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ px: 0 }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Buy'.
        Buy Now
      </Button>

      // @ts-expect-error TS(2304): Cannot find name 'product'.
      {product.details.map((row: any, index: any) => (
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={index}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            typography: { xs: 'caption', md: 'body2' },
          }}
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {row || '-'}
        </Typography>
      ))}
    </Stack>
  );
}

EcommerceCompareItem.propTypes = {
  product: PropTypes.shape({
    coverImg: PropTypes.string,
    details: PropTypes.array,
    name: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
  }),
};
