// @mui
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { Typography, Stack, Container, Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function OurClientsTravel({
  brands
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: 5,
        // @ts-expect-error TS(2304): Cannot find name 'pb'.
        pb: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          gap: 3,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: { xs: 'center', md: 'left' },
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h2">Our Clients</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={2}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h4" paragraph>
            // @ts-expect-error TS(2304): Cannot find name 'Enhance'.
            Enhance Your Life By Having A Sense Of Purpose
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Around'.
            Around the world, food-borne illnesses have become increasingly common. In the United
            // @ts-expect-error TS(2304): Cannot find name 'States'.
            States alone, millions of people get a food-related illness each year.
          </Typography>
        </Stack>
      </Box>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          columnGap: 3,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'mt'.
          mt: { xs: 8, md: 15 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(3, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {brands.map((brand: any) => <SvgColor
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={brand.id}
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          src={brand.image}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            width: 106,
            height: 32,
            color: (theme: any) => alpha(theme.palette.grey[500], 0.8),
            mr: { xs: 'auto' },
            ml: { xs: 'auto', md: 'unset' },
          }}
        />)}
      </Box>
    </Container>
  );
}

OurClientsTravel.propTypes = {
  brands: PropTypes.array,
};
