// @mui
import PropTypes from 'prop-types';
import { Typography, Stack, Container, Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function OurClientsMarketingAbout({
  brands
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 7, md: 11 },
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack alignItems="center" spacing={5}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h2">Our Clients</Typography>

        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction="row"
          // @ts-expect-error TS(2304): Cannot find name 'flexWrap'.
          flexWrap="wrap"
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent="center"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ maxWidth: 680, overflow: 'hidden' }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          {brands.slice(0, 8).map((brand: any) => <Box key={brand.id}>
            <Image
              // @ts-expect-error TS(2304): Cannot find name 'alt'.
              alt={brand.name}
              // @ts-expect-error TS(2304): Cannot find name 'src'.
              src={brand.image}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                height: 32,
                mx: { xs: 2, md: 4 },
                my: { xs: 2.5, md: 4 },
              }}
            />
          </Box>)}
        </Stack>
      </Stack>
    </Container>
  );
}

OurClientsMarketingAbout.propTypes = {
  brands: PropTypes.array,
};
