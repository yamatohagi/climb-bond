// @mui
import { Box, Typography, Container, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _products } from 'src/_mock';
//
import { EcommerceProductItemHot, EcommerceProductItemCountDown } from '../product/item';

// ----------------------------------------------------------------------

export default function EcommerceLandingFeaturedProducts() {
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
        // @ts-expect-error TS(2304): Cannot find name 'Featured'.
        Featured Products
      </Typography>

      // @ts-expect-error TS(2552): Cannot find name 'container'. Did you mean 'Contai... Remove this comment to see the full error message
      <Grid container spacing={3}>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} lg={8}>
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box
            // @ts-expect-error TS(2304): Cannot find name 'gap'.
            gap={3}
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display="grid"
            // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          >
            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            {_products.slice(1, 3).map((product: any, index: any) => (
              // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceProductItemCountDow... Remove this comment to see the full error message
              <EcommerceProductItemCountDown
                // @ts-expect-error TS(2304): Cannot find name 'key'.
                key={product.id}
                // @ts-expect-error TS(2304): Cannot find name 'product'.
                product={product}
                // @ts-expect-error TS(2304): Cannot find name 'color'.
                color={index === 0 ? 'primary' : 'secondary'}
              />
            ))}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Box>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} lg={4}>
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
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
              // @ts-expect-error TS(2304): Cannot find name 'lg'.
              lg: 'repeat(2, 1fr)',
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          >
            // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceProductItemHot' as ... Remove this comment to see the full error message
            {_products.slice(4, 8).map((product: any) => <EcommerceProductItemHot key={product.id} product={product} />)}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
