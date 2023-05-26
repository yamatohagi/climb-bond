import PropTypes from 'prop-types';
import { add } from 'date-fns';
// next
import NextLink from 'next/link';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Typography, Stack, Link } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { filterStyles } from 'src/utils/cssStyles';
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency } from 'src/utils/formatNumber';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';
//
import { ProductCountdownBlock } from '../../components';

// ----------------------------------------------------------------------

export default function EcommerceProductItemCountDown({
  product,
  color = 'primary',
  sx
}: any) {
  const theme = useTheme();

  return (
    // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link component={NextLink} href={paths.eCommerce.product} color="inherit" underline="none">
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={3}
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 3,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: 2,
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          color: `${color}.darker`,
          // @ts-expect-error TS(2552): Cannot find name 'bgcolor'. Did you mean 'color'?
          bgcolor: `${color}.lighter`,
          // @ts-expect-error TS(2304): Cannot find name 'transition'.
          transition: theme.transitions.create('background-color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
          }),
          '&:hover': {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            color: `${color}.lighter`,
            // @ts-expect-error TS(2552): Cannot find name 'bgcolor'. Did you mean 'color'?
            bgcolor: `${color}.main`,
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
            ...filterStyles(
              // @ts-expect-error TS(2304): Cannot find name 'theme'.
              `drop-shadow(20px 20px 24px ${alpha(theme.palette.common.black, 0.16)})`
            ),
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        />

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="subtitle2" sx={{ opacity: 0.72 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {product.name}
          </TextMaxLine>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h5">{`From ${fCurrency(product.price)}`}</Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'expired'.
        <ProductCountdownBlock expired={add(new Date: any(), { days: 1, hours: 8 })} />
      </Stack>
    </Link>
  );
}

EcommerceProductItemCountDown.propTypes = {
  color: PropTypes.string,
  product: PropTypes.shape({
    coverImg: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  sx: PropTypes.object,
};
