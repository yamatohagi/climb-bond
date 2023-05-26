import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Stack, Button, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _products } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import { EcommerceProductItemFeaturedByBrand } from '../product/item';

// ----------------------------------------------------------------------

export default function EcommerceLandingFeaturedBrands() {
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
        Featured Brands
      </Typography>

      // @ts-expect-error TS(2552): Cannot find name 'container'. Did you mean 'Contai... Remove this comment to see the full error message
      <Grid container spacing={3}>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={4}>
          // @ts-expect-error TS(2709): Cannot use namespace 'BrandInfo' as a type.
          <BrandInfo
            // @ts-expect-error TS(2304): Cannot find name 'logo'.
            logo={<Iconify icon="ri:apple-fill" width={40} />}
            // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
            name="Apple"
            // @ts-expect-error TS(2304): Cannot find name 'description'.
            description=" While most people enjoy casino gambling, sports betting, lottery and bingo playing."
            // @ts-expect-error TS(2304): Cannot find name 'path'.
            path="#"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ height: 1 }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={8}>
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box
            // @ts-expect-error TS(2304): Cannot find name 'gap'.
            gap={3}
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display="grid"
            // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
            gridTemplateColumns={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              xs: 'repeat(1, 1fr)',
              // @ts-expect-error TS(2304): Cannot find name 'sm'.
              sm: 'repeat(2, 1fr)',
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          >
            // @ts-expect-error TS(2709): Cannot use namespace 'EcommerceProductItemFeatured... Remove this comment to see the full error message
            {_products.slice(4, 8).map((product: any) => <EcommerceProductItemFeaturedByBrand key={product.id} product={product} />)}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

// ----------------------------------------------------------------------

function BrandInfo({
  logo,
  name,
  description,
  path,
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems="center"
      // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
      justifyContent="center"
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        p: 5,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
        textAlign: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'border'.
        border: (theme: any) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...sx,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {logo}

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        {name}
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {description}
      </Typography>

      <Button
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component={NextLink}
        // @ts-expect-error TS(2304): Cannot find name 'href'.
        href={path}
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color="inherit"
        // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
        endIcon={<Iconify icon="carbon:chevron-right" />}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ mt: 5 }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'More'.
        More Details
      </Button>
    </Stack>
  );
}

BrandInfo.propTypes = {
  description: PropTypes.string,
  logo: PropTypes.object,
  name: PropTypes.string,
  path: PropTypes.string,
  sx: PropTypes.object,
};
