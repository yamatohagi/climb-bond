import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Link } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';
//
import { ProductPrice, ProductRating } from '../../components';

// ----------------------------------------------------------------------

export default function EcommerceProductItemBestSellers({
  product,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link component={NextLink} href={paths.eCommerce.product} color="inherit" underline="none">
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={2}
        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        direction="row"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          transition: (theme: any) => theme.transitions.create('opacity', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
          }),
          '&:hover': { opacity: 0.72 },
        }}
        // @ts-expect-error TS(2304): Cannot find name 'other'.
        {...other}
      >
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
        <Stack spacing={0.5}>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {product.name}
          </TextMaxLine>

          // @ts-expect-error TS(2304): Cannot find name 'rating'.
          <ProductRating rating={product.rating} label={`${product.sold} sold`} />

          // @ts-expect-error TS(2304): Cannot find name 'price'.
          <ProductPrice price={product.price} priceSale={product.priceSale} />
        </Stack>
      </Stack>
    </Link>
  );
}

EcommerceProductItemBestSellers.propTypes = {
  product: PropTypes.shape({
    coverImg: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    rating: PropTypes.number,
    sold: PropTypes.number,
  }),
};
