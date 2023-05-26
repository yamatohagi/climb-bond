// @mui
import { Box, Typography, Container } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _products } from 'src/_mock';
//
import { EcommerceProductItemHot, EcommerceProductItemTop } from '../product/item';

// ----------------------------------------------------------------------

export default function EcommerceLandingTopProducts() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 5, md: 8 },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="h3"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mb: 8,
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        // @ts-expect-error TS(2552): Cannot find name 'Top'. Did you mean 'top'?
        Top Products
      </Typography>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'gap'.
        gap={3}
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display="grid"
        // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
        gridTemplateColumns={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          xs: 'repeat(2, 1fr)',
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md: 'repeat(4, 1fr)',
        }}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ mb: { xs: 3, md: 8 } }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceProductItemHot' as ... Remove this comment to see the full error message
        {_products.slice(4, 8).map((product: any) => <EcommerceProductItemHot key={product.id} product={product} />)}
      </Box>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'gap'.
        gap={3}
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display="grid"
        // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
        gridTemplateColumns={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          xs: 'repeat(1, 1fr)',
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md: 'repeat(2, 1fr)',
        }}
      >
        // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceProductItemTop' as ... Remove this comment to see the full error message
        <EcommerceProductItemTop variant="large" product={_products[6]} />

        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box
          // @ts-expect-error TS(2304): Cannot find name 'gap'.
          gap={3}
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display="grid"
          // @ts-expect-error TS(2304): Cannot find name 'gridTemplateRows'.
          gridTemplateRows={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(2, 1fr)',
          }}
        >
          // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceProductItemTop' as ... Remove this comment to see the full error message
          <EcommerceProductItemTop product={_products[4]} />
          // @ts-expect-error TS(2304): Cannot find name 'product'.
          <EcommerceProductItemTop product={_products[10]} />
        </Box>
      </Box>
    </Container>
  );
}
