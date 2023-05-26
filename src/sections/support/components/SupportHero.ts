// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Typography, Stack, TextField, InputAdornment } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(15, 2.5),
  alignItems: 'center',
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
}));

// ----------------------------------------------------------------------

export default function SupportHero() {
  return (
    // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <StyledRoot>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h2" sx={{ textAlign: 'center', color: 'common.white', mb: 5 }}>
        // @ts-expect-error TS(2304): Cannot find name 'Welcome'.
        Welcome to <br />
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box component="span" sx={{ color: 'primary.main' }}>
          // @ts-expect-error TS(2349): This expression is not callable.
          {`ZONE `}
        </Box>
        // @ts-expect-error TS(2304): Cannot find name 'Support'.
        Support
      </Typography>

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
          sx: { color: 'common.white' },
        }}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ maxWidth: 366 }}
      />
    </StyledRoot>
  );
}
