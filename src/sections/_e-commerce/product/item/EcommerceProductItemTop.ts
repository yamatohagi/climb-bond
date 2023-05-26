import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Box, Paper, Button } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';
//
import { ProductPrice } from '../../components';

// ----------------------------------------------------------------------

export default function EcommerceProductItemTop({
  // @ts-expect-error TS(2300): Duplicate identifier 'product'.
  product,
  variant = 'small',
  // @ts-expect-error TS(2300): Duplicate identifier 'sx'.
  sx
}: any) {
  const isMdUp = useResponsive('up', 'md');

  const isLarge = isMdUp && variant === 'large';

  // @ts-expect-error TS(2300): Duplicate identifier 'product'.
  const coverImg = <Image src={product.coverImg} />;

  const nameText = (
    // @ts-expect-error TS(2365): Operator '>' cannot be applied to types '{ 1: any;... Remove this comment to see the full error message
    <TextMaxLine variant="h5" line={1}>
      {product.name}
    </TextMaxLine>
  );

  const priceText = (
    // @ts-expect-error TS(2300): Duplicate identifier 'sx'.
    <ProductPrice price={product.price} sx={{ typography: 'h5', color: 'text.disabled' }} />
  );

  const moreBtn = (
    // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Button
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={NextLink}
      // @ts-expect-error TS(2304): Cannot find name 'href'.
      href={paths.eCommerce.product}
      // @ts-expect-error TS(2304): Cannot find name 'color'.
      color="inherit"
      // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
      endIcon={<Iconify icon="carbon:chevron-right" />}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ flexShrink: 0 }}
    >
      // @ts-expect-error TS(2304): Cannot find name 'More'.
      More Details
    </Button>
  );

  const renderLargeItem = (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={5}>
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {coverImg}

      <Stack spacing={5} direction="row" alignItems="center">
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={1} flexGrow={1}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {nameText}
          // @ts-expect-error TS(2304): Cannot find name 'priceText'.
          {priceText}
        </Stack>

        {moreBtn}
      </Stack>
    </Stack>
  );

  const renderSmallItem = (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'gap'.
      gap={3}
      // @ts-expect-error TS(2304): Cannot find name 'display'.
      display="grid"
      // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ height: 1 }}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          order: { sm: 2 },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {coverImg}
      </Box>

      // @ts-expect-error TS(2588): Cannot assign to 'spacing' because it is a constan... Remove this comment to see the full error message
      <Stack spacing={1}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {nameText}
        // @ts-expect-error TS(2304): Cannot find name 'priceText'.
        {priceText}

        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          flexGrow={1}
          // @ts-expect-error TS(2588): Cannot assign to 'alignItems' because it is a cons... Remove this comment to see the full error message
          alignItems={{ xs: 'flex-end', sm: 'flex-start' }}
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent="flex-end"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ pt: 5 }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          {moreBtn}
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <Paper
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        p: 5,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'background.neutral',
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        ...sx,
      }}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {isLarge ? renderLargeItem : renderSmallItem}
    </Paper>
  );
}

EcommerceProductItemTop.propTypes = {
  product: PropTypes.shape({
    coverImg: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  sx: PropTypes.object,
  variant: PropTypes.string,
};
