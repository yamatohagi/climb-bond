import PropTypes from 'prop-types';
import { Typography, Paper, Box, Stack, IconButton } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function MapPopup({
  office,
  onClose,
  lat,
  lng
}: any) {
  const handleClose = (event: any) => {
    event.stopPropagation();
    onClose();
    console.log('lat-lng', lat, lng);
  };

  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ width: 220, overflow: 'hidden', borderRadius: 1.5, mt: 2, ml: 2, position: 'relative' }}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box sx={{ position: 'absolute', right: 4, top: 4, zIndex: 9 }}>
        // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
        <IconButton size="small" onClick={handleClose}>
          <Iconify
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            icon="carbon:close-filled"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              opacity: 0.48,
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              color: 'common.white',
              '&:hover': { opacity: 1 },
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              ...(!office.photo && {
                color: 'text.disabled',
              }),
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </IconButton>
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'office'.
      {office.photo && <Image alt="photo" src={office.photo} ratio="4/3" />}

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={1}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 1.5,
          // @ts-expect-error TS(2304): Cannot find name 'wordBreak'.
          wordBreak: 'break-all',
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(!office.photo && {
            p: 2,
            pr: 3.5,
          }),
        }}
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {office.country && <Typography variant="subtitle2">{office.country}</Typography>}

        // @ts-expect-error TS(2304): Cannot find name 'office'.
        {office.address && (
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography component="p" variant="caption">
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {office.address}
          </Typography>
        )}

        // @ts-expect-error TS(2304): Cannot find name 'office'.
        {office.email && (
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" alignItems="flex-start" sx={{ typography: 'caption' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:email" width={18} sx={{ mr: 0.5 }} />
            // @ts-expect-error TS(2304): Cannot find name 'office'.
            {office.email}
          </Stack>
        )}

        // @ts-expect-error TS(2304): Cannot find name 'office'.
        {office.phoneNumber && (
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" alignItems="flex-start" sx={{ typography: 'caption' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:phone" width={18} sx={{ mr: 0.5 }} />
            // @ts-expect-error TS(2304): Cannot find name 'office'.
            {office.phoneNumber}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
}

MapPopup.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  office: PropTypes.shape({
    address: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    photo: PropTypes.string,
  }),
  onClose: PropTypes.func,
};
