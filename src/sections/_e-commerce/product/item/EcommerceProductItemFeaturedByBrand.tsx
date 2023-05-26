import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { alpha } from '@mui/material/styles';
import { Stack, Button } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
//
import { ProductPrice } from '../../components';

// ----------------------------------------------------------------------

export default function EcommerceProductItemFeaturedByBrand({ product, sx, ...other }: any) {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        p: 2,
        borderRadius: 2,
        border: (theme: any) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        ...sx,
      }}
      {...other}
    >
      <Image
        src={product.coverImg}
        sx={{
          width: 128,
          height: 128,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack spacing={0.5} flexGrow={1}>
        <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
          {product.name}
        </TextMaxLine>

        <TextMaxLine variant="caption" line={1} sx={{ color: 'text.disabled' }}>
          {product.category}
        </TextMaxLine>

        <ProductPrice price={product.price} priceSale={product.priceSale} />

        <Stack flexGrow={1} alignItems="flex-end" justifyContent="flex-end">
          <Button
            component={NextLink}
            href={paths.eCommerce.product}
            size="small"
            color="inherit"
            variant="contained"
          >
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
