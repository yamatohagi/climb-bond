// @mui
import { Container, Typography, Button, Box, Unstable_Grid2 as Grid } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function ElearningAboutHero() {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 10, md: 20 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'primary.lighter',
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="space-between">
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
              color: 'grey.800',
              // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h1">Online Courses</Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ mt: 3, mb: 6 }}>
              // @ts-expect-error TS(2304): Cannot find name 'Nunc'.
              Nunc nulla. Ut leo. Pellentesque commodo eros a enim. Nunc egestas, augue at
              // @ts-expect-error TS(2304): Cannot find name 'pellentesque'.
              pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Button variant="contained" size="large">
              // @ts-expect-error TS(2304): Cannot find name 'Browse'.
              Browse Courses
            </Button>
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          <Grid xs={12} md={6} lg={6}>
            // @ts-expect-error TS(2304): Cannot find name 'alt'.
            <Image alt="courses-online" src="/assets/illustrations/illustration_courses_hero.svg" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
