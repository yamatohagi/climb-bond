import PropTypes from 'prop-types';
// @mui
import {
  Box,
  Stack,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useCountdown' or its... Remove this comment to see the full error message
import useCountdown from 'src/hooks/useCountdown';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ComingSoonView() {
  const { days, hours, minutes, seconds } = useCountdown(new Date('07/07/2024 21:30'));

  return <>
    // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
    <Typography variant="h3" paragraph>
      // @ts-expect-error TS(2304): Cannot find name 'Coming'.
      Coming Soon!
    </Typography>

    // @ts-expect-error TS(2304): Cannot find name 'sx'.
    <Typography sx={{ color: 'text.secondary' }}>
      // @ts-expect-error TS(2304): Cannot find name 'We'.
      We are currently working hard on this page!
    </Typography>

    <Image
      // @ts-expect-error TS(2304): Cannot find name 'alt'.
      alt="comingsoon"
      // @ts-expect-error TS(2304): Cannot find name 'src'.
      src="/assets/illustrations/illustration_comingsoon.svg"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        my: 3,
        // @ts-expect-error TS(2304): Cannot find name 'mx'.
        mx: 'auto',
        // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
        maxWidth: 320,
      }}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
    />

    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
      justifyContent="center"
      // @ts-expect-error TS(2304): Cannot find name 'divider'.
      divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ typography: 'h2' }}
    >
      // @ts-expect-error TS(2709): Cannot use namespace 'TimeBlock' as a type.
      <TimeBlock label="Days" value={days} />

      // @ts-expect-error TS(2709): Cannot use namespace 'TimeBlock' as a type.
      <TimeBlock label="Hours" value={hours} />

      // @ts-expect-error TS(2709): Cannot use namespace 'TimeBlock' as a type.
      <TimeBlock label="Minutes" value={minutes} />

      // @ts-expect-error TS(2709): Cannot use namespace 'TimeBlock' as a type.
      <TimeBlock label="Seconds" value={seconds} />
    </Stack>

    <TextField
      // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
      fullWidth
      // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
      hiddenLabel
      // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
      placeholder="Enter your email"
      // @ts-expect-error TS(2304): Cannot find name 'InputProps'.
      InputProps={{
        endAdornment: (
          // @ts-expect-error TS(2749): 'InputAdornment' refers to a value, but is being u... Remove this comment to see the full error message
          <InputAdornment position="end">
            // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
            <Button variant="contained" size="large" color="inherit">
              // @ts-expect-error TS(2304): Cannot find name 'Notify'.
              Notify
            </Button>
          </InputAdornment>
        ),
        sx: { pr: 0.5 },
      }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ my: 5 }}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
    />

    // @ts-expect-error TS(2304): Cannot find name 'direction'.
    <Stack direction="row" justifyContent="center">
      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      {_socials.map((social: any) => <IconButton key={social.value}>
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon={social.icon} sx={{ color: social.color }} />
      </IconButton>)}
    </Stack>
  </>;
}

// ----------------------------------------------------------------------

function TimeBlock({
  label,
  value
}: any) {
  return (
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box> {value} </Box>
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}

TimeBlock.propTypes = {
  label: PropTypes.string,
  value: PropTypes.node,
};
