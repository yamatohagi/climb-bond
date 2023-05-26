import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Rating, Button } from '@mui/material';
// utils
import { fCurrency } from 'src/utils/formatNumber';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function EcommerceCompareItem({
  product
}: any) {
  return (
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
      <Image
                src={product.coverImg}
                sx={{
                    flexShrink: 0,
                    borderRadius: 1.5,
                    bgcolor: 'background.neutral',
        }}
            />

            <Stack alignItems="center" spacing={1}>
                <Typography variant="subtitle2"> {product.name} </Typography>
                <Typography variant="h6"> {fCurrency(product: any.price)} </Typography>
        <Rating
                    size="small"
                    readOnly
                    value={product.rating}
                    precision={0.5}
                    sx={{
            '& svg': {
                            width: { xs: 12, md: 20 },
                            height: { xs: 12, md: 20 },
            },
          }}
                />
      </Stack>

      <Button
                component={NextLink}
                href={paths.eCommerce.cart}
                fullWidth
                size="large"
                color="inherit"
                variant="contained"
                sx={{ px: 0 }}
      >
                Buy Now
      </Button>

            {product.details.map((row: any, index: any) => (
                <Typography
                    key={index}
                    sx={{
            typography: { xs: 'caption', md: 'body2' },
          }}
        >
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
