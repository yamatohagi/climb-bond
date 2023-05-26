// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Button, Unstable_Grid2 as Grid } from '@mui/material';
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
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  padding: theme.spacing(10, 0),
}));

// ----------------------------------------------------------------------

export default function CareerLandingForRecruiters() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <StyledRoot>
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
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
              color: 'common.white',
              // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
              // @ts-expect-error TS(2304): Cannot find name 'FOR'.
              FOR RECRUITERS
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="h2">Do You Have A Position To Post Job? </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ mt: 3, mb: 5, opacity: 0.72 }}>
              // @ts-expect-error TS(2304): Cannot find name 'Donec'.
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis
              // @ts-expect-error TS(2304): Cannot find name 'ullamcorper'.
              ullamcorper velit.
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Button variant="contained" size="large" startIcon={<Iconify icon="carbon:document" />}>
              // @ts-expect-error TS(2304): Cannot find name 'Post'.
              Post a Job
            </Button>
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
          {isMdUp && (
            // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Grid xs={12} md={6} lg={5}>
              // @ts-expect-error TS(2304): Cannot find name 'alt'.
              <Image alt="recruitment" src="/assets/illustrations/illustration_recruitment.svg" />
            </Grid>
          )}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Grid>
      </Container>
    </StyledRoot>
  );
}
