// @mui
import { Stack, Container, Typography, Card, Unstable_Grid2 as Grid } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const VISIONS = [
  {
    name: 'Vestibulum',
    description: 'In dui magna, posuere eget, vestibulum et, tempor auctor, justo.',
  },
  {
    name: 'Fusce',
    description: 'Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.',
  },
  { name: 'Praesent', description: 'Suspendisse feugiat. Quisque id odio.' },
];

// ----------------------------------------------------------------------

export default function TravelAboutOurVision() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={3}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          maxWidth: 466,
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: { xs: 8, md: 5 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mx: { xs: 'auto', md: 'unset' },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h2">Our Mission</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Typography sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Curabitur'.
          Curabitur ullamcorper ultricies nisi. Aenean viverra rhoncus pede.
        </Typography>
      </Stack>

      <Grid
        // @ts-expect-error TS(2304): Cannot find name 'container'.
        container
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={{ xs: 8, md: 3 }}
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="space-between"
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems={{ md: 'center' }}
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={6} lg={5}>
          // @ts-expect-error TS(2304): Cannot find name 'alt'.
          <Image alt="vision" src="/assets/illustrations/illustration_vision.svg" />
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={6} lg={6}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack alignItems={{ md: 'flex-end' }} sx={{ position: 'relative' }}>
            {VISIONS.map((vision: any, index: any) => {
              const { name, description } = vision;

              const firstVision = index === 0;

              const secondVision = index === 1;

              const thirdVision = index === 2;

              return (
                // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
                <Card
                  // @ts-expect-error TS(2304): Cannot find name 'key'.
                  key={name}
                  // @ts-expect-error TS(2304): Cannot find name 'sx'.
                  sx={{
                    // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                    p: 4,
                    // @ts-expect-error TS(2304): Cannot find name 'mt'.
                    mt: 4,
                    // @ts-expect-error TS(2304): Cannot find name 'width'.
                    width: { md: 'calc(50% - 16px)' },
                    // @ts-expect-error TS(2304): Cannot find name 'firstVision'.
                    ...(firstVision && {
                      top: { md: 0 },
                      left: { md: 0 },
                      bottom: { md: 0 },
                      my: { md: 'auto' },
                      boxShadow: { md: 0 },
                      maxHeight: { md: 304 },
                      display: { md: 'flex' },
                      position: { md: 'absolute' },
                      flexDirection: { md: 'column' },
                      justifyContent: { md: 'center' },
                    }),
                    // @ts-expect-error TS(2304): Cannot find name 'secondVision'.
                    ...(secondVision && {
                      boxShadow: (theme: any) => ({
                        md: theme.customShadows.z24
                      }),
                    }),
                    // @ts-expect-error TS(2304): Cannot find name 'thirdVision'.
                    ...(thirdVision && {
                      boxShadow: { md: 0 },
                    }),
                  }}
                >
                  // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
                  <Typography
                    // @ts-expect-error TS(2304): Cannot find name 'variant'.
                    variant="h1"
                    // @ts-expect-error TS(2304): Cannot find name 'component'.
                    component="h2"
                    // @ts-expect-error TS(2304): Cannot find name 'sx'.
                    sx={{ color: 'text.disabled', opacity: 0.24, mb: 3 }}
                  >
                    // @ts-expect-error TS(2349): This expression is not callable.
                    {`0${index + 1}`}
                  </Typography>

                  // @ts-expect-error TS(2304): Cannot find name 'variant'.
                  <Typography variant="h4" paragraph>
                    {name}
                  </Typography>

                  // @ts-expect-error TS(2304): Cannot find name 'sx'.
                  <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
                </Card>
              );
            })}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
