// @mui
import { TextField, InputAdornment, Box } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PostSearchMobile() {
  const isMdDown = useResponsive('down', 'md');

  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    <>
      {isMdDown && (
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box sx={{ px: 2, pb: 3 }}>
          // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
          <TextField
            // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
            fullWidth
            // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
            hiddenLabel
            // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
            placeholder="Search..."
            // @ts-expect-error TS(2304): Cannot find name 'InputProps'.
            InputProps={{
              startAdornment: (
                // @ts-expect-error TS(2749): 'InputAdornment' refers to a value, but is being u... Remove this comment to see the full error message
                <InputAdornment position="start">
                  // @ts-expect-error TS(2304): Cannot find name 'icon'.
                  <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}
    </>
  );
}
