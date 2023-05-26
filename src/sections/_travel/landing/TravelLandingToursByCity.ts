import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Paper, Avatar, Button, Container, Box, Link } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function TravelLandingToursByCity({
  tours
}: any) {
  const isMdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Button
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={NextLink}
      // @ts-expect-error TS(2304): Cannot find name 'href'.
      href={paths.travel.tours}
      // @ts-expect-error TS(2304): Cannot find name 'color'.
      color="inherit"
      // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      // @ts-expect-error TS(2304): Cannot find name 'View'.
      View All
    </Button>
  );

  return (
    <Container
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: { xs: 5, md: 10 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: 10,
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        direction="row"
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent={{ xs: 'center', md: 'space-between' }}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mb: { xs: 8, md: 10 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={3}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2">Tours By City</Typography>
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2349): This expression is not callable.
            {`Our Featured Tours can help you find the trip that's perfect for you!`}
          </Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
        {isMdUp && viewAllBtn}
      </Stack>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          gap: 3,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(3, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'lg'.
            lg: 'repeat(4, 1fr)',
          },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {tours.map((tour: any) => <TourItem key={tour.id} tour={tour} />)}
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
      {!isMdUp && (
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack alignItems="center" sx={{ mt: 8 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}

TravelLandingToursByCity.propTypes = {
  tours: PropTypes.array,
};

// ----------------------------------------------------------------------

function TourItem({
  tour
}: any) {
  const { coverImg, location } = tour;

  return (
    // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link component={NextLink} href={paths.travel.tour} color="inherit" underline="none">
      // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Paper
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="outlined"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 3,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: 2,
          // @ts-expect-error TS(2304): Cannot find name 'cursor'.
          cursor: 'pointer',
          // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
          bgcolor: 'background.default',
          '&:hover': {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            boxShadow: (theme: any) => theme.customShadows.z24,
            // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
            bgcolor: 'background.paper',
          },
        }}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack direction="row" alignItems="center" spacing={2.5}>
          // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Avatar src={coverImg} sx={{ width: 64, height: 64 }} />

          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          <Stack spacing={0.5}>
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <TextMaxLine variant="h6" line={1}>
              {location}
            </TextMaxLine>

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2304): Cannot find name 'Place'.
              196 Place
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Link>
  );
}

TourItem.propTypes = {
  tour: PropTypes.shape({
    coverImg: PropTypes.string,
    location: PropTypes.string,
  }),
};
