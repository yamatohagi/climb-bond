// @mui
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function NewsletterElearning() {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 10, md: 15 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'primary.lighter',
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid
          // @ts-expect-error TS(2552): Cannot find name 'container'. Did you mean 'Contai... Remove this comment to see the full error message
          container
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={{ xs: 5, md: 3 }}
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems={{ md: 'center' }}
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent={{ md: 'space-between' }}
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={5} sx={{ textAlign: 'center', color: 'grey.800' }}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h3">Register Now Forget 20% Discount Every Courses</Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ mt: 2.5, mb: 5 }}>
              // @ts-expect-error TS(2304): Cannot find name 'Nam'.
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed magna purus,
              // @ts-expect-error TS(2304): Cannot find name 'fermentum'.
              fermentum eu
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
                    <Button size="large" variant="contained">
                      // @ts-expect-error TS(2304): Cannot find name 'Register'.
                      Register
                    </Button>
                  </InputAdornment>
                ),
                sx: {
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  pr: 0.5,
                  // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
                  bgcolor: 'common.white',
                  '&:hover, &.Mui-focused': {
                    // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                    bgcolor: 'common.white',
                  },
                },
              }}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ maxWidth: 560 }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            />
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          <Grid xs={12} md={5}>
            <Image
              // @ts-expect-error TS(2304): Cannot find name 'alt'.
              alt="newsletter"
              // @ts-expect-error TS(2304): Cannot find name 'src'.
              src="/assets/illustrations/illustration_newsletter.svg"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ maxWidth: 366, mx: 'auto' }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
