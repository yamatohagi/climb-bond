// next
import NextLink from 'next/link';
// @mui
import { Container, Typography, Button, Unstable_Grid2 as Grid } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _products } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import { EcommerceHeader } from '../layout';
import { EcommerceCartList, EcommerceCartSummary } from '../cart';

// ----------------------------------------------------------------------

export default function EcommerceCartView() {
  return (
    <>
      // @ts-expect-error TS(2749): 'EcommerceHeader' refers to a value, but is being ... Remove this comment to see the full error message
      <EcommerceHeader />

      <Container
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          overflow: 'hidden',
          // @ts-expect-error TS(2304): Cannot find name 'pt'.
          pt: 5,
          // @ts-expect-error TS(2304): Cannot find name 'pb'.
          pb: { xs: 5, md: 10 },
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h3" sx={{ mb: 5 }}>
          // @ts-expect-error TS(2304): Cannot find name 'Shopping'.
          Shopping Cart
        </Typography>

        // @ts-expect-error TS(2552): Cannot find name 'container'. Did you mean 'Contai... Remove this comment to see the full error message
        <Grid container spacing={{ xs: 5, md: 8 }}>
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={8}>
            // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceCartList' as a type... Remove this comment to see the full error message
            <EcommerceCartList products={_products.slice(0, 4)} />
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          <Grid xs={12} md={4}>
            // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceCartSummary' as a t... Remove this comment to see the full error message
            <EcommerceCartSummary
              // @ts-expect-error TS(2304): Cannot find name 'tax'.
              tax={7}
              // @ts-expect-error TS(2304): Cannot find name 'total'.
              total={357.09}
              // @ts-expect-error TS(2304): Cannot find name 'subtotal'.
              subtotal={89.09}
              // @ts-expect-error TS(2304): Cannot find name 'shipping'.
              shipping={55.47}
              // @ts-expect-error TS(2304): Cannot find name 'discount'.
              discount={16.17}
            />
          </Grid>
        </Grid>

        <Button
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          component={NextLink}
          // @ts-expect-error TS(2304): Cannot find name 'href'.
          href={paths.eCommerce.products}
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="inherit"
          // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
          startIcon={<Iconify icon="carbon:chevron-left" />}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ mt: 3 }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Continue'.
          Continue Shopping
        </Button>
      </Container>
    </>
  );
}
