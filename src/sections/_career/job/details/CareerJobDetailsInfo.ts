import PropTypes from 'prop-types';
// @mui
import { Stack, Typography, Card } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency } from 'src/utils/formatNumber';
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CareerJobDetailsInfo({
  job
}: any) {
  const { createdAt, salary, experience, deadline, level, languages } = job;

  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card sx={{ p: 3 }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={2} direction="row" alignItems="flex-start">
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:calendar" width={24} />
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="subtitle2"> Date Posted </Typography>
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {fDate(createdAt: any)}
            </Typography>
          </Stack>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={2} direction="row" alignItems="flex-start">
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:hourglass" width={24} />
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="subtitle2"> Expiration date </Typography>
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="body2" sx={{ color: 'error.main' }}>
              {fDate(deadline: any)}
            </Typography>
          </Stack>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={2} direction="row" alignItems="flex-start">
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:money" width={24} />
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="subtitle2"> Offered Salary (month) </Typography>
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2304): Cannot find name 'salary'.
              {typeof salary === 'number' ? fCurrency(salary) : salary}
            </Typography>
          </Stack>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={2} direction="row" alignItems="flex-start">
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:increase-level" width={24} />
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="subtitle2"> Experience </Typography>
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2349): This expression is not callable.
              {`${experience} year exp`}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            </Typography>
          </Stack>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={2} direction="row" alignItems="flex-start">
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:user" width={24} />
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="subtitle2"> Level </Typography>
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {level}
            </Typography>
          </Stack>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={2} direction="row" alignItems="flex-start">
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:translate" width={24} />
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="subtitle2"> Language </Typography>
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2304): Cannot find name 'languages'.
              {typeof languages === 'string' ? languages : languages.join(', ')}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

CareerJobDetailsInfo.propTypes = {
  job: PropTypes.shape({
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    deadline: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    experience: PropTypes.number,
    languages: PropTypes.arrayOf(PropTypes.string),
    level: PropTypes.string,
    salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};
