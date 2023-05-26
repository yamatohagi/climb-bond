// @mui
import { Typography, Container, Button, Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const STEPS = [
  {
    title: 'Create an account',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: '/assets/icons/ic_resume_job.svg',
  },
  {
    title: 'Complete your profile',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: '/assets/icons/ic_resume_job.svg',
  },
  {
    title: 'Search your job',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: '/assets/icons/ic_search_job.svg',
  },
];

// ----------------------------------------------------------------------

export default function CareerLandingStep() {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        textAlign: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'pt'.
        pt: { xs: 10, md: 15 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(2304): Cannot find name 'For'.
          For Candidates
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="h2" sx={{ my: 3 }}>
          // @ts-expect-error TS(2304): Cannot find name 'Explore'.
          Explore Thousands of Jobs
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Typography sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Donec'.
          Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis ullamcorper
          // @ts-expect-error TS(2304): Cannot find name 'velit'.
          velit.
        </Typography>

        <Box
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            display: 'grid',
            // @ts-expect-error TS(2304): Cannot find name 'my'.
            my: { xs: 8, md: 10 },
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            gap: { xs: 8, md: 5 },
            gridTemplateColumns: {
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              xs: 'repeat(1, 1fr)',
              // @ts-expect-error TS(2304): Cannot find name 'md'.
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          {STEPS.map((value: any, index: any) => (
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div key={value.title}>
              <SvgColor
                // @ts-expect-error TS(2304): Cannot find name 'src'.
                src={value.icon}
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{ width: 80, height: 80, mx: 'auto', color: 'primary.main' }}
              />
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography
                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                variant="overline"
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{ mt: 4, display: 'block', color: 'text.disabled' }}
              >
                // @ts-expect-error TS(2304): Cannot find name 'Step'.
                Step {index + 1}
              </Typography>

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {value.title}
              </Typography>

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {value.description}
              </Typography>
            </div>
          ))}
        </Box>

        <Button
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="contained"
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="large"
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="inherit"
          // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
          startIcon={<Iconify icon="carbon:cloud-upload" />}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Upload'.
          Upload Your CV
        </Button>
      </Container>
    </Box>
  );
}
