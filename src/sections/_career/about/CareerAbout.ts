// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Stack, Box, Unstable_Grid2 as Grid } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fShortenNumber } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/count-up' or it... Remove this comment to see the full error message
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Jobs', number: 2230000 },
  { name: 'Successful Hiring', number: 500000 },
  { name: 'Partners', number: 250 },
  { name: 'Employee', number: 1560 },
];

// ----------------------------------------------------------------------

const StyledSection = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(10),
  },
}));

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    right: 0,
    width: '75%',
    left: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

// ----------------------------------------------------------------------

export default function CareerAbout() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: 5,
        // @ts-expect-error TS(2304): Cannot find name 'pb'.
        pb: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'paragraph'.
        paragraph
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="overline"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ color: 'primary.main', textAlign: { xs: 'center', md: 'left' } }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'About'.
        About us
      </Typography>

      <Grid
        // @ts-expect-error TS(2304): Cannot find name 'container'.
        container
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={3}
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="space-between"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={6} lg={5}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2">We Make The Best For All Our Customers.</Typography>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={6} lg={6} sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={{ xs: 3, md: 10 }} direction={{ xs: 'column', md: 'row' }}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography>
              // @ts-expect-error TS(2304): Cannot find name 'Curabitur'.
              Curabitur ullamcorper ultricies nisi. Sed mollis, eros et ultrices tempus, mauris
              // @ts-expect-error TS(2304): Cannot find name 'ipsum'.
              ipsum aliquam libero, non adipiscing dolor urna a orci.
            </Typography>

            <Typography>
              // @ts-expect-error TS(2304): Cannot find name 'Donec'.
              Donec vitae sapien ut libero venenatis faucibus. Vestibulum fringilla pede sit amet
              // @ts-expect-error TS(2304): Cannot find name 'augue'.
              augue. Vivamus euismod mauris.
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <Section />
    </Container>
  );
}

// ----------------------------------------------------------------------

function Section() {
  return (
    // @ts-expect-error TS(2749): 'StyledSection' refers to a value, but is being us... Remove this comment to see the full error message
    <StyledSection>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          py: 10,
          // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
          zIndex: 9,
          // @ts-expect-error TS(2304): Cannot find name 'ml'.
          ml: 'auto',
          // @ts-expect-error TS(2304): Cannot find name 'position'.
          position: 'relative',
          // @ts-expect-error TS(2304): Cannot find name 'px'.
          px: { xs: 2.5, md: 10 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: { md: 0.75, lg: 0.5 },
        }}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            mb: 5,
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color: 'common.white',
            // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2" paragraph>
            // @ts-expect-error TS(2304): Cannot find name 'Our'.
            Our Agency Has Been
          </Typography>
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ opacity: 0.72 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Hello'.
            Hello. Our agency has been present for over 20 years. We make the best for all our
            // @ts-expect-error TS(2304): Cannot find name 'customers'.
            customers.
          </Typography>
        </Stack>

        <Box
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            gap: 5,
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display: 'grid',
            // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
            gridTemplateColumns: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'div'.
          {SUMMARY.map((value: any) => <div key={value.name}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h2" gutterBottom sx={{ color: 'primary.main' }}>
              <CountUp
                // @ts-expect-error TS(2304): Cannot find name 'start'.
                start={value.number / 5}
                // @ts-expect-error TS(2304): Cannot find name 'end'.
                end={value.number}
                // @ts-expect-error TS(2304): Cannot find name 'formattingFn'.
                formattingFn={(newValue) => fShortenNumber(newValue)}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
              />

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="h3" component="span" sx={{ verticalAlign: 'top', ml: 0.5 }}>
                +
              </Typography>
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="body2" sx={{ color: 'grey.500' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {value.name}
            </Typography>
          </div>)}
        </Box>
      </Stack>

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <StyledOverlay />

      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0 }}>
        <Image
          // @ts-expect-error TS(2304): Cannot find name 'alt'.
          alt="career about"
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          src="/assets/images/career/career_about_team.jpg"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ width: 1, height: 1 }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </Box>
    </StyledSection>
  );
}
