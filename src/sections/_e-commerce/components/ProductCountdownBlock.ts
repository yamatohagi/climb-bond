import PropTypes from 'prop-types';
// @mui
import { Stack, Typography } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useCountdown' or its... Remove this comment to see the full error message
import useCountdown from 'src/hooks/useCountdown';

// ----------------------------------------------------------------------

export default function ProductCountdownBlock({
  expired,
  hiddenLabel = false,
  sx,
  ...other
}: any) {
  const { days, hours, minutes, seconds } = useCountdown(expired);

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={1}
      // @ts-expect-error TS(2304): Cannot find name 'display'.
      display="inline-flex"
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems="center"
      // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
      justifyContent="center"
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        typography: 'subtitle1',
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...sx,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    // @ts-expect-error TS(2365): Operator '>' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      {Number(days: any) > 0 && (
        <>
          // @ts-expect-error TS(2709): Cannot use namespace 'TimeBlock' as a type.
          <TimeBlock label="Days" value={days} hiddenLabel={hiddenLabel} />
          // @ts-expect-error TS(2709): Cannot use namespace 'Separator' as a type.
          <Separator hiddenLabel={hiddenLabel} />
        </>
      )}

      // @ts-expect-error TS(2709): Cannot use namespace 'TimeBlock' as a type.
      <TimeBlock label="Hours" value={hours} hiddenLabel={hiddenLabel} />

      // @ts-expect-error TS(2709): Cannot use namespace 'Separator' as a type.
      <Separator hiddenLabel={hiddenLabel} />

      // @ts-expect-error TS(2304): Cannot find name 'label'.
      <TimeBlock label="Minutes" value={minutes} hiddenLabel={hiddenLabel} />

      // @ts-expect-error TS(2709): Cannot use namespace 'Separator' as a type.
      <Separator hiddenLabel={hiddenLabel} />

      // @ts-expect-error TS(2304): Cannot find name 'label'.
      <TimeBlock label="Seconds" value={seconds} hiddenLabel={hiddenLabel} />
    </Stack>
  );
}

ProductCountdownBlock.propTypes = {
  expired: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  hiddenLabel: PropTypes.bool,
  sx: PropTypes.object,
};

// ----------------------------------------------------------------------

function TimeBlock({
  label,
  value,
  hiddenLabel
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={1}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'className'.
        className="value"
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="center"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: 56,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 44,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: 1,
          // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
          bgcolor: 'grey.800',
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color: 'common.white',
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {value}
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
      {!hiddenLabel && (
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography
          // @ts-expect-error TS(2304): Cannot find name 'className'.
          className="label"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="caption"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ color: 'grey.600', textAlign: 'center' }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {label}
        </Typography>
      )}
    </Stack>
  );
}

TimeBlock.propTypes = {
  hiddenLabel: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
};
// ----------------------------------------------------------------------

function Separator({
  hiddenLabel
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={1} flexShrink={0} className="separator" sx={{ color: 'grey.800' }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack alignItems="center" justifyContent="center" flexGrow={1}>
        :
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
      {!hiddenLabel && (
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="caption" sx={{ opacity: 0 }}>
          :
        </Typography>
      )}
    </Stack>
  );
}

Separator.propTypes = {
  hiddenLabel: PropTypes.bool,
};
