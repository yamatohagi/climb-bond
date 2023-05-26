// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Stack,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  ...bgGradient({
    startColor: `${alpha(theme.palette.grey[900], 0.88)}`,
    endColor: `${alpha(theme.palette.grey[900], 0.88)}`,
    imgUrl: '/assets/images/travel/travel_newsletter.jpg',
  }),
  [theme.breakpoints.up('md')]: {
    ...bgGradient({
      direction: 'to right',
      startColor: `${alpha(theme.palette.grey[900], 0)} 0%`,
      endColor: `${alpha(theme.palette.grey[900], 1)} 50%`,
      imgUrl: '/assets/images/travel/travel_newsletter.jpg',
    }),
    backgroundPosition: 'center, left ',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

export default function NewsletterTravel() {
  return (
    // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <StyledRoot>
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container spacing={3} justifyContent="flex-end">
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={5}>
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack
              // @ts-expect-error TS(2304): Cannot find name 'spacing'.
              spacing={3}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                color: 'common.white',
                // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="h2">Newsletter</Typography>

              <Typography>
                // @ts-expect-error TS(2304): Cannot find name 'Sign'.
                Sign up now to receive hot special offers
                // @ts-expect-error TS(2304): Cannot find name 'br'.
                <br /> and information about the best tours!
              </Typography>

              <TextField
                // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
                fullWidth
                // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
                hiddenLabel
                // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
                placeholder="Enter your email"
                // @ts-expect-error TS(2304): Cannot find name 'InputProps'.
                InputProps={{
                  endAdornment: (
                    // @ts-expect-error TS(2749): 'InputAdornment' refers to a value, but is being u... Remove this comment to see the full error message
                    <InputAdornment position="end">
                      // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
                      <Button variant="contained" size="large" sx={{ minWidth: 48, px: 0 }}>
                        // @ts-expect-error TS(2304): Cannot find name 'icon'.
                        <Iconify icon="carbon:chevron-right" />
                      </Button>
                    </InputAdornment>
                  ),
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  sx: { pr: 0.5, color: 'common.white' },
                }}
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{ my: 5 }}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
