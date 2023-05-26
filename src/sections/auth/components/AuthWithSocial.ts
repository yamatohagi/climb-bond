// @mui
import { Stack, Button } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function AuthWithSocial() {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack direction="row" spacing={2}>
      // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Button fullWidth size="large" color="inherit" variant="outlined">
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="logos:google-icon" width={24} />
      </Button>

      // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
      <Button fullWidth size="large" color="inherit" variant="outlined">
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="carbon:logo-facebook" width={24} sx={{ color: '#1877F2' }} />
      </Button>

      // @ts-expect-error TS(2304): Cannot find name 'color'.
      <Button color="inherit" fullWidth variant="outlined" size="large">
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="carbon:logo-github" width={24} sx={{ color: 'text.primary' }} />
      </Button>
    </Stack>
  );
}
