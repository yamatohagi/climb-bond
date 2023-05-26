import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Paper, Typography, LinearProgress, Link } from '@mui/material';
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

export default function EcommerceProductItemHot({
  product,
  hotProduct = false,
  sx
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link component={NextLink} href={paths.eCommerce.product} color="inherit" underline="none">
      // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Paper
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="outlined"
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 2,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: 2,
          // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
          bgcolor: 'background.default',
          // @ts-expect-error TS(2304): Cannot find name 'transition'.
          transition: (theme: any) => theme.transitions.create('background-color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
          }),
          '&:hover': {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            bgcolor: 'background.neutral',
          },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...sx,
        }}
      >
        <Image
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          src={product.coverImg}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            mb: 2,
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

          <ProductPrice
            // @ts-expect-error TS(2304): Cannot find name 'price'.
            price={product.price}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              ...(hotProduct && {
                color: 'error.main',
              }),
            }}
          />
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'hotProduct'.
        {hotProduct && (
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
            // @ts-expect-error TS(2749): 'LinearProgress' refers to a value, but is being u... Remove this comment to see the full error message
            <LinearProgress
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              color="inherit"
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              variant="determinate"
              // @ts-expect-error TS(2304): Cannot find name 'value'.
              value={(product.sold / product.inStock) * 100}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ width: 1 }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
            />

            <Typography
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              variant="caption"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ flexShrink: 0, color: 'text.disabled' }}
            // @ts-expect-error TS(2349): This expression is not callable.
            >{`🔥 ${product.sold} Sold`}</Typography>
          </Stack>
        )}
      </Paper>
    </Link>
  );
}

EcommerceProductItemHot.propTypes = {
  hotProduct: PropTypes.bool,
  product: PropTypes.object,
  sx: PropTypes.object,
};
