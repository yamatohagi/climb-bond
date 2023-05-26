// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Stack, Fab } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 100%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  maxWidth: 564,
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    zIndex: 9,
    position: 'absolute',
    color: theme.palette.common.white,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutOurVision() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack alignItems="center" justifyContent="center" sx={{ position: 'relative' }}>
        // @ts-expect-error TS(2749): 'StyledTypography' refers to a value, but is being... Remove this comment to see the full error message
        <StyledTypography
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="h2"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            mb: 5,
            top: { md: 80 },
          }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Our'.
          Our Vision
        </StyledTypography>

        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems="center"
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent="center"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ position: 'relative', width: 1, borderRadius: 2, overflow: 'hidden' }}
        >
          // @ts-expect-error TS(2749): 'Fab' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Fab
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="primary"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              zIndex: 9,
              // @ts-expect-error TS(2304): Cannot find name 'position'.
              position: 'absolute',
            }}
          >
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:play" width={24} />
          </Fab>

          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          <StyledOverlay />

          // @ts-expect-error TS(2304): Cannot find name 'alt'.
          <Image alt="hero" src="/assets/images/marketing/marketing_post_01.jpg" ratio="16/9" />
        </Stack>

        <StyledTypography
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="h5"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            mt: 5,
            // @ts-expect-error TS(2304): Cannot find name 'bottom'.
            bottom: { md: 80 },
            opacity: { md: 0.72 },
          }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Our'.
          Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada.
        </StyledTypography>
      </Stack>
    </Container>
  );
}
