import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { alpha } from '@mui/material/styles';
import { Stack, Button } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';
//
import { ProductPrice } from '../../components';

// ----------------------------------------------------------------------

export default function EcommerceProductItemFeaturedByBrand({
  product,
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={2}
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        p: 2,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'border'.
        border: (theme: any) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...sx,
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
          width: 128,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 128,
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
      <Stack spacing={0.5} flexGrow={1}>
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {product.name}
        </TextMaxLine>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <TextMaxLine variant="caption" line={1} sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {product.category}
        </TextMaxLine>

        // @ts-expect-error TS(2304): Cannot find name 'price'.
        <ProductPrice price={product.price} priceSale={product.priceSale} />

        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack flexGrow={1} alignItems="flex-end" justifyContent="flex-end">
          // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Button
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            component={NextLink}
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href={paths.eCommerce.product}
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="small"
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="inherit"
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="contained"
          >
            // @ts-expect-error TS(2304): Cannot find name 'Buy'.
            Buy Now
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

EcommerceProductItemFeaturedByBrand.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    coverImg: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
  }),
  sx: PropTypes.object,
};
