import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Container, Stack, Button, Typography, Box, Unstable_Grid2 as Grid } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
// @ts-expect-error TS(6142): Module '../job/item/CareerJobItem' was resolved to... Remove this comment to see the full error message
import CareerJobItem from '../job/item/CareerJobItem';

// ----------------------------------------------------------------------

export default function CareerLandingFeaturedJobs({
  jobs
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: { xs: 5, md: 10 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid
        // @ts-expect-error TS(2552): Cannot find name 'container'. Did you mean 'Contai... Remove this comment to see the full error message
        container
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={{ xs: 2, md: 4 }}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={4}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Featured'.
            Featured Jobs
          </Typography>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={8}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h3">
            // @ts-expect-error TS(2304): Cannot find name 'Jobs'.
            Jobs available apply to Editorial Specialist, Account Manager, Human Resources
            // @ts-expect-error TS(2304): Cannot find name 'Specialist'.
            Specialist and more!
          </Typography>
        </Grid>
      </Grid>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          columnGap: 4,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'py'.
          py: { xs: 8, md: 10 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(3, 1fr)',
          },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {jobs.map((job: any) => <CareerJobItem key={job.id} job={job} />)}
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      <Stack alignItems="center">
        // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Button
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          component={NextLink}
          // @ts-expect-error TS(2304): Cannot find name 'href'.
          href={paths.career.jobs}
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="inherit"
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="large"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="outlined"
          // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          // @ts-expect-error TS(2304): Cannot find name 'View'.
          View All Jobs
        </Button>
      </Stack>
    </Container>
  );
}

CareerLandingFeaturedJobs.propTypes = {
  jobs: PropTypes.array,
};
