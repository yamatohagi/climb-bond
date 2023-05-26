import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link, Paper } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';

// ----------------------------------------------------------------------

export default function CareerJobDetailsCompanySimilar({
  jobs
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h5" sx={{ mb: 1 }}>
        // @ts-expect-error TS(2304): Cannot find name 'Jobs'.
        Jobs From This Company
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'jobs'.
      {jobs.map((job: any) => <Stack
        // @ts-expect-error TS(2304): Cannot find name 'key'.
        key={job.id}
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={0.5}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          py: 2,
          borderBottom: (theme: any) => `dashed 1px ${theme.palette.divider}`,
          '&:last-child': {
            borderBottom: 0,
          },
        }}
      >
        // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Link component={NextLink} href={paths.career.job} variant="subtitle1" color="inherit">
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {job.slug}
        </Link>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(2693): 'any' only refers to a type, but is being used as ... Remove this comment to see the full error message
          {fDate(job: any.deadline)}
        </Typography>
      </Stack>)}
    </Paper>
  );
}

CareerJobDetailsCompanySimilar.propTypes = {
  jobs: PropTypes.array,
};
