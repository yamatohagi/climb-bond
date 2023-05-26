import PropTypes from 'prop-types';
// @mui
import { Stack, Typography, Link, Paper } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function CareerJobDetailsCompanyInfo({
  job
}: any) {
  const { companyLogo, companyName } = job;

  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2} direction="row" alignItems="center">
        <Image
          // @ts-expect-error TS(2304): Cannot find name 'alt'.
          alt={companyName}
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          src={companyLogo}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ width: 48, height: 48, borderRadius: 1 }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        />

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={0.5}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h6">{companyName}</Typography>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'View'.
            View Company Profile
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
}

CareerJobDetailsCompanyInfo.propTypes = {
  job: PropTypes.object,
};
