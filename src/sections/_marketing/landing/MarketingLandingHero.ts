// @mui
import { alpha, styled } from '@mui/material/styles';
import { Stack, Container, Typography, Button, Fab, Unstable_Grid2 as Grid } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  overflow: 'hidden',
}));

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <StyledRoot>
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          py: 15,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
        }}
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid
            // @ts-expect-error TS(2304): Cannot find name 'xs'.
            xs={12}
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md={6}
            // @ts-expect-error TS(2304): Cannot find name 'lg'.
            lg={5}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="overline" sx={{ color: 'secondary.main' }}>
              // @ts-expect-error TS(2304): Cannot find name 'Digital'.
              Digital Marketing
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="h1" sx={{ my: 3 }}>
              // @ts-expect-error TS(2304): Cannot find name 'Boosts'.
              Boosts Your Website Traffic
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2304): Cannot find name 'Etiam'.
              Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
              // @ts-expect-error TS(2304): Cannot find name 'venenatis'.
              venenatis ante odio sit amet eros.
            </Typography>

            <Stack
              // @ts-expect-error TS(2304): Cannot find name 'spacing'.
              spacing={3}
              // @ts-expect-error TS(2304): Cannot find name 'direction'.
              direction={{ xs: 'column', sm: 'row' }}
              // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
              alignItems={{ xs: 'center', md: 'unset' }}
              // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
              justifyContent={{ xs: 'center', md: 'unset' }}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ mt: 5 }}
            >
              // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
              <Button variant="contained" color="inherit" size="large">
                // @ts-expect-error TS(2304): Cannot find name 'Try'.
                Try For Free
              </Button>

              // @ts-expect-error TS(2304): Cannot find name 'direction'.
              <Stack direction="row" alignItems="center" sx={{ typography: 'h6' }}>
                // @ts-expect-error TS(2749): 'Fab' refers to a value, but is being used as a ty... Remove this comment to see the full error message
                <Fab size="medium" sx={{ mr: 1 }}>
                  // @ts-expect-error TS(2304): Cannot find name 'width'.
                  <Iconify width={24} icon="carbon:play" />
                </Fab>
                // @ts-expect-error TS(2304): Cannot find name 'See'.
                See Our Work
              </Stack>
            </Stack>
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
          {isMdUp && (
            // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Grid xs={12} md={6} lg={7}>
              <Image
                // @ts-expect-error TS(2304): Cannot find name 'visibleByDefault'.
                visibleByDefault
                // @ts-expect-error TS(2304): Cannot find name 'disabledEffect'.
                disabledEffect
                // @ts-expect-error TS(2304): Cannot find name 'alt'.
                alt="marketing market"
                // @ts-expect-error TS(2304): Cannot find name 'src'.
                src="/assets/illustrations/illustration_marketing_market.svg"
              />
            </Grid>
          )}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Grid>
      </Container>
    </StyledRoot>
  );
}
