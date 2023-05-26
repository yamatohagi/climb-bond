import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Box, Fab, Link } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';
//
import { ProductRating, ProductPrice } from '../../components';

// ----------------------------------------------------------------------

export default function EcommerceProductViewGridItem({
  product,
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        position: 'relative',
        '&:hover .add-to-cart': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          opacity: 1,
        },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...sx,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {product.label === 'new' && (
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        <Label color="info" sx={{ position: 'absolute', m: 1, top: 0, right: 0, zIndex: 9 }}>
          // @ts-expect-error TS(2304): Cannot find name 'NEW'.
          NEW
        </Label>
      )}

      // @ts-expect-error TS(2304): Cannot find name 'product'.
      {product.label === 'sale' && (
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        <Label color="error" sx={{ position: 'absolute', m: 1, top: 0, right: 0, zIndex: 9 }}>
          // @ts-expect-error TS(2304): Cannot find name 'SALE'.
          SALE
        </Label>
      )}

      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box sx={{ position: 'relative', mb: 2 }}>
        // @ts-expect-error TS(2749): 'Fab' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Fab
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          component={NextLink}
          // @ts-expect-error TS(2304): Cannot find name 'href'.
          href={paths.eCommerce.product}
          // @ts-expect-error TS(2304): Cannot find name 'className'.
          className="add-to-cart"
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="primary"
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="medium"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            right: 8,
            // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
            zIndex: 9,
            // @ts-expect-error TS(2304): Cannot find name 'bottom'.
            bottom: 8,
            // @ts-expect-error TS(2304): Cannot find name 'opacity'.
            opacity: 0,
            // @ts-expect-error TS(2304): Cannot find name 'position'.
            position: 'absolute',
            // @ts-expect-error TS(2304): Cannot find name 'transition'.
            transition: (theme: any) => theme.transitions.create('opacity', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
          }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:shopping-cart-plus" />
        </Fab>

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
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={0.5}>
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <TextMaxLine variant="caption" line={1} sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {product.category}
        </TextMaxLine>

        // @ts-expect-error TS(2304): Cannot find name 'component'.
        <Link component={NextLink} href={paths.eCommerce.product} color="inherit">
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {product.name}
          </TextMaxLine>
        </Link>

        // @ts-expect-error TS(2304): Cannot find name 'price'.
        <ProductPrice price={product.price} priceSale={product.priceSale} />

        // @ts-expect-error TS(2709): Cannot use namespace 'ProductRating' as a type.
        <ProductRating rating={product.rating} label={`${product.sold} sold`} />
      </Stack>
    </Stack>
  );
}

EcommerceProductViewGridItem.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    coverImg: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    rating: PropTypes.number,
    sold: PropTypes.number,
  }),
  sx: PropTypes.object,
};
