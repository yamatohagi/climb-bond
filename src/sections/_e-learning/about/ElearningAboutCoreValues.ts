// @mui
import { Typography, Container, Stack, Box, Unstable_Grid2 as Grid } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Customer Satisfaction',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:3d-curve-auto-colon',
  },
  {
    title: 'Transparency',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:chat-bot',
  },
  {
    title: 'Reputation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:airport-location',
  },
  {
    title: 'Cooperation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:event',
  },
];

// ----------------------------------------------------------------------

export default function ElearningAboutCoreValues() {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'background.neutral',
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: { xs: 8, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={3}
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={{ xs: 'column', md: 'row' }}
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent={{ md: 'space-between' }}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            mb: { xs: 8, md: 15 },
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2">Core Values</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 540 } }}>
            // @ts-expect-error TS(2304): Cannot find name 'Etiam'.
            Etiam ultricies nisi vel augue. Suspendisse potenti. Sed mollis, eros et ultrices
            // @ts-expect-error TS(2304): Cannot find name 'tempus'.
            tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Phasellus viverra
            // @ts-expect-error TS(2304): Cannot find name 'nulla'.
            nulla ut metus varius laoreet.
          </Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'container'.
        <Grid container spacing={8}>
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          {CORE_VALUES.map((value: any) => <Grid
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={value.title}
            // @ts-expect-error TS(2304): Cannot find name 'xs'.
            xs={12}
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm={6}
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md={3}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon={value.icon} width={48} sx={{ color: 'primary.main' }} />

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {value.title}
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </Grid>)}
        </Grid>
      </Container>
    </Box>
  );
}
