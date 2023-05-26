// next
import NextLink from 'next/link';
// @mui
import { Box, Container, Typography, Button, Stack, Unstable_Grid2 as Grid } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const LISTS = [
  'First Class Flights',
  '5 Star Accommodations',
  'Inclusive Packages',
  'Latest Model Vehicles',
];

// ----------------------------------------------------------------------

export default function MarketingServices() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: { xs: 10, md: 15 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={6} lg={5}>
          // @ts-expect-error TS(2304): Cannot find name 'alt'.
          <Image alt="services" src="/assets/illustrations/illustration_services.svg" />
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={6} lg={6}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={3} sx={{ mb: 5 }}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h2">Offline SEO</Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2304): Cannot find name 'Aenean'.
              Aenean commodo ligula eget dolor. Sed hendrerit. Vestibulum ante ipsum primis in
              // @ts-expect-error TS(2304): Cannot find name 'faucibus'.
              faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer
              // @ts-expect-error TS(2304): Cannot find name 'lacinia'.
              lacinia.
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            <Stack spacing={2}>
              // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
              {LISTS.map((text: any) => <Stack key={text} direction="row" alignItems="center">
                // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
                <Box
                  // @ts-expect-error TS(2304): Cannot find name 'component'.
                  component="span"
                  // @ts-expect-error TS(2304): Cannot find name 'sx'.
                  sx={{
                    mr: 2,
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                  }}
                />
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {text}
              </Stack>)}
            </Stack>
          </Stack>

          <Button
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            component={NextLink}
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href={paths.marketing.caseStudies}
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="large"
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="inherit"
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="outlined"
            // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            // @ts-expect-error TS(2304): Cannot find name 'Check'.
            Check Our Work
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
