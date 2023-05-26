import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Stack, Radio, Typography, LinearProgress, FormControlLabel } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fShortenNumber } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ReviewProgressItem({
  rating,
  totals,
  index
}: any) {
  const { value, number } = rating;

  return (
    // @ts-expect-error TS(2749): 'FormControlLabel' refers to a value, but is being... Remove this comment to see the full error message
    <FormControlLabel
      value={value}
      // @ts-expect-error TS(2304): Cannot find name 'control'.
      control={<Radio sx={{ display: 'none' }} />}
      // @ts-expect-error TS(2304): Cannot find name 'label'.
      label={
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        <Stack alignItems="center" direction="row">
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" alignItems="center">
            // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
            <Box sx={{ width: 12, typography: 'subtitle1', textAlign: 'center', mr: 0.5 }}>
              // @ts-expect-error TS(2304): Cannot find name 'index'.
              {5 - index}
            </Box>
            // @ts-expect-error TS(2304): Cannot find name 'width'.
            <Iconify width={16} icon="carbon:star" />
          </Stack>

          <LinearProgress
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="inherit"
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="determinate"
            // @ts-expect-error TS(2304): Cannot find name 'value'.
            value={(number / totals) * 100}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              mx: 2,
              // @ts-expect-error TS(2304): Cannot find name 'width'.
              width: 1,
              // @ts-expect-error TS(2304): Cannot find name 'height'.
              height: 6,
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              '&:before': { opacity: 1, bgcolor: (theme: any) => alpha(theme.palette.grey[500], 0.12) },
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
          />

          <Typography
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="body2"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              minWidth: 40,
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              color: 'text.disabled',
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          >
            {fShortenNumber(number: any)}
          </Typography>
        </Stack>
      }
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        mx: 0,
        '&:hover': { opacity: 0.48 },
        '& .MuiFormControlLabel-label': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: 1,
        },
      }}
    />
  );
}

ReviewProgressItem.propTypes = {
  index: PropTypes.number,
  rating: PropTypes.shape({
    number: PropTypes.number,
    value: PropTypes.string,
  }),
  totals: PropTypes.number,
};
