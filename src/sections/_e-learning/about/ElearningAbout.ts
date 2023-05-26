// @mui
import { Container, Typography, Box, Stack, Unstable_Grid2 as Grid } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fShortenNumber } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/count-up' or it... Remove this comment to see the full error message
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    name: 'Learners',
    number: 14000,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
  {
    name: 'Courses',
    number: 1050,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
  {
    name: 'Graduates',
    number: 52000,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
];

// ----------------------------------------------------------------------

export default function ElearningAbout() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: 10,
      }}
    >
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid
        // @ts-expect-error TS(2552): Cannot find name 'container'. Did you mean 'Contai... Remove this comment to see the full error message
        container
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={{ xs: 2, md: 8 }}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={6}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Nullam'.
            Nullam accumsan lorem in dui.
          </Typography>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={6}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h3" sx={{ mb: 3 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Effective'.
            Effective Forms Advertising Internet Web Site
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(1101): 'with' statements are not allowed in strict mode.
            Over 92% of computers are infected with Adware and spyware. Such software is rarely
            // @ts-expect-error TS(2304): Cannot find name 'accompanied'.
            accompanied by uninstall utility and even when it is it almost always leaves broken
            // @ts-expect-error TS(2304): Cannot find name 'Windows'.
            Windows
          </Typography>
        </Grid>
      </Grid>

      <Grid
        // @ts-expect-error TS(2304): Cannot find name 'container'.
        container
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={8}
        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        direction={{ md: 'row-reverse' }}
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent={{ md: 'space-between' }}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pt: { xs: 8, md: 10 },
        }}
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={6} lg={6}>
          <Image
            // @ts-expect-error TS(2304): Cannot find name 'alt'.
            alt="about"
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            src="/assets/images/course/course_about.jpg"
            // @ts-expect-error TS(2304): Cannot find name 'ratio'.
            ratio="3/4"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ borderRadius: 2 }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </Grid>

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
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={{ xs: 5, md: 10 }}>
            // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
            {SUMMARY.map((value: any) => <Box key={value.name}>
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="h4" sx={{ color: 'text.disabled', opacity: 0.48 }}>
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {value.name}
              </Typography>

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                <CountUp
                  // @ts-expect-error TS(2304): Cannot find name 'start'.
                  start={value.number / 2}
                  // @ts-expect-error TS(2304): Cannot find name 'end'.
                  end={value.number}
                  // @ts-expect-error TS(2304): Cannot find name 'formattingFn'.
                  formattingFn={(newValue) => fShortenNumber(newValue)}
                />
                +
              </Typography>

              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              <Typography sx={{ color: 'text.secondary' }}>{value.description}</Typography>
            </Box>)}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
