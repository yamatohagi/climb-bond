import PropTypes from 'prop-types';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Stack, Box, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const ROWS = [
  'First Class Flights',
  '5 Star Accommodations',
  'Inclusive Packages',
  'Latest Model Vehicles',
  'Handpicked Hotels',
  'Accesibility managment',
];

// ----------------------------------------------------------------------

export const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function TravelLandingFavoriteDestinations({
  tours
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid
        // @ts-expect-error TS(2552): Cannot find name 'container'. Did you mean 'Contai... Remove this comment to see the full error message
        container
        // @ts-expect-error TS(2304): Cannot find name 'rowSpacing'.
        rowSpacing={{ xs: 8, md: 0 }}
        // @ts-expect-error TS(2304): Cannot find name 'columnSpacing'.
        columnSpacing={{ xs: 0, md: 3 }}
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems={{ md: 'center' }}
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent={{ md: 'space-between' }}
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={4}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2">Our Favorite Destinations</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ my: 3, color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Since'.
            Since wire-frame renderings are relatively simple and fast to calculate, they are often
            // @ts-expect-error TS(2304): Cannot find name 'used'.
            used in cases
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          <Stack spacing={2}>
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            {ROWS.map((line: any) => <Stack key={line} direction="row" alignItems="center" sx={{ typography: 'body1' }}>
              // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
              <Box
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  mr: 2,
                  // @ts-expect-error TS(2304): Cannot find name 'width'.
                  width: 6,
                  // @ts-expect-error TS(2304): Cannot find name 'height'.
                  height: 6,
                  // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
                  borderRadius: '50%',
                  // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
                  bgcolor: 'primary.main',
                }}
              />
              // @ts-expect-error TS(2304): Cannot find name 'line'.
              {line}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            </Stack>)}
          </Stack>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'container'.
        <Grid container xs={12} md={6} spacing={{ xs: 4, md: 3 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {tours.map((tour: any, index: any) => (
            // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Grid
              // @ts-expect-error TS(2304): Cannot find name 'key'.
              key={tour.id}
              // @ts-expect-error TS(2304): Cannot find name 'xs'.
              xs={12}
              // @ts-expect-error TS(2304): Cannot find name 'sm'.
              sm={6}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2304): Cannot find name 'index'.
                ...(index === 1 && {
                  display: { md: 'inline-flex' },
                  alignItems: { md: 'flex-end' },
                }),
              }}
            >
              // @ts-expect-error TS(2709): Cannot use namespace 'DestinationItem' as a type.
              <DestinationItem tour={tour} order={index % 3} />
            </Grid>
          ))}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Grid>
      </Grid>
    </Container>
  );
}

TravelLandingFavoriteDestinations.propTypes = {
  tours: PropTypes.array,
};

// ----------------------------------------------------------------------

function DestinationItem({
  tour,
  order
}: any) {
  const isMdUp = useResponsive('up', 'md');

  const { location, continent, coverImg } = tour;

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        width: 1,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'relative',
        // @ts-expect-error TS(2304): Cannot find name 'overflow'.
        overflow: 'hidden',
      }}
    >
      // @ts-expect-error TS(2749): 'StyledOverlay' refers to a value, but is being us... Remove this comment to see the full error message
      <StyledOverlay />

      <Image
        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        alt={location}
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        src={coverImg}
        // @ts-expect-error TS(2304): Cannot find name 'ratio'.
        ratio={(!isMdUp && '1/1') || (order && '1/1') || '4/6'}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={1}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 3,
          // @ts-expect-error TS(2304): Cannot find name 'left'.
          left: 0,
          // @ts-expect-error TS(2304): Cannot find name 'bottom'.
          bottom: 0,
          // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
          zIndex: 9,
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color: 'common.white',
          // @ts-expect-error TS(2304): Cannot find name 'position'.
          position: 'absolute',
        }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <TextMaxLine variant="h5" line={1}>
          {location}
        </TextMaxLine>

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" alignItems="center">
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:location" sx={{ mr: 1, color: 'primary.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="body2" line={1} sx={{ opacity: 0.72 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {continent}
          </TextMaxLine>
        </Stack>
      </Stack>
    </Box>
  );
}

DestinationItem.propTypes = {
  order: PropTypes.number,
  tour: PropTypes.shape({
    continent: PropTypes.string,
    coverImg: PropTypes.string,
    location: PropTypes.string,
  }),
};
