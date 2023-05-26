// @mui
import { Typography, Stack, Container, Box, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function ElearningLandingIntroduce() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 8, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="overline"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          display: 'block',
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color: 'primary.main',
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: { xs: 2, md: 10 },
        }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Nullam'.
        Nullam accumsan lorem in dui.
      </Typography>

      <Grid
        // @ts-expect-error TS(2304): Cannot find name 'container'.
        container
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={3}
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems={{ md: 'center' }}
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent={{ md: 'space-between' }}
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {isMdUp && (
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={6} lg={5}>
            <Image
              // @ts-expect-error TS(2304): Cannot find name 'alt'.
              alt="about"
              // @ts-expect-error TS(2304): Cannot find name 'src'.
              src="/assets/images/course/course_6.jpg"
              // @ts-expect-error TS(2304): Cannot find name 'ratio'.
              ratio="4/6"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        )}

        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={6} lg={6}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h3" sx={{ mb: 3 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Phasellus'.
            Phasellus gravida semper nisi. Vestibulum rutrum
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Curabitur'.
            Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam
            // @ts-expect-error TS(2304): Cannot find name 'vitae'.
            vitae tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            // @ts-expect-error TS(2304): Cannot find name 'inceptos'.
            inceptos hymenaeos.
          </Typography>

          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            direction={{ xs: 'column', md: 'row' }}
            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            spacing={{ xs: 5, md: 10 }}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ mt: { xs: 8, md: 10 } }}
          >
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack spacing={3}>
              // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              <Typography sx={{ color: 'text.secondary' }}>
                // @ts-expect-error TS(2304): Cannot find name 'Pellentesque'.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              </Typography>
            </Stack>

            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            <Stack spacing={3}>
              // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              <Typography sx={{ color: 'text.secondary' }}>
                // @ts-expect-error TS(2304): Cannot find name 'Pellentesque'.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
