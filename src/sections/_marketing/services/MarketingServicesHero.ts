// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Stack,
  Button,
  Container,
  InputBase,
  Typography,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
    imgUrl: '/assets/images/marketing/marketing_services_hero.jpg',
  }),
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(20, 0),
  },
}));

// @ts-expect-error TS(2769): No overload matches this call.
const StyledInput = styled((props: any) => <InputBase fullWidth {...props} />)(({ theme }) => ({
  ...theme.typography.body1,
  height: 56,
  paddingLeft: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
}));

// ----------------------------------------------------------------------

export default function MarketingServicesHero() {
  return (
    // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <StyledRoot>
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container spacing={3} justifyContent="center">
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={8}>
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack
              // @ts-expect-error TS(2304): Cannot find name 'spacing'.
              spacing={3}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                mb: 5,
                // @ts-expect-error TS(2304): Cannot find name 'mx'.
                mx: 'auto',
                // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
                maxWidth: 480,
                // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
                textAlign: 'center',
                // @ts-expect-error TS(2304): Cannot find name 'color'.
                color: 'common.white',
              }}
            >
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="h1">Offline SEO</Typography>

              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              <Typography sx={{ opacity: 0.72 }}>
                // @ts-expect-error TS(2304): Cannot find name 'Etiam'.
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                // @ts-expect-error TS(2304): Cannot find name 'venenatis'.
                venenatis ante odio sit amet eros.
              </Typography>
            </Stack>

            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            <MarketingServicesHeroForm />
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function MarketingServicesHeroForm() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
      // @ts-expect-error TS(2749): 'StyledInput' refers to a value, but is being used... Remove this comment to see the full error message
      <StyledInput
        // @ts-expect-error TS(2304): Cannot find name 'startAdornment'.
        startAdornment={
          // @ts-expect-error TS(2749): 'InputAdornment' refers to a value, but is being u... Remove this comment to see the full error message
          <InputAdornment position="start">
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:email" width={24} sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
        // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
        placeholder="Email"
      />

      // @ts-expect-error TS(2749): 'StyledInput' refers to a value, but is being used... Remove this comment to see the full error message
      <StyledInput
        // @ts-expect-error TS(2304): Cannot find name 'startAdornment'.
        startAdornment={
          // @ts-expect-error TS(2749): 'InputAdornment' refers to a value, but is being u... Remove this comment to see the full error message
          <InputAdornment position="start">
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:license-global" width={24} sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
        // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
        placeholder="Website URL"
      />

      // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Button fullWidth={!isMdUp} size="large" variant="contained" sx={{ flexShrink: 0 }}>
        // @ts-expect-error TS(2304): Cannot find name 'Analyse'.
        Analyse
      </Button>
    </Stack>
  );
}
