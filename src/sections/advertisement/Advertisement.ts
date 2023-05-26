import PropTypes from 'prop-types';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Box, Typography, Button } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 100%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function Advertisement({
  advertisement,
  sx,
  ...other
}: any) {
  const { title, description, path, imageUrl } = advertisement;

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', ...sx }} {...other}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 5,
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width: 1,
          // @ts-expect-error TS(2304): Cannot find name 'bottom'.
          bottom: 0,
          // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
          zIndex: 9,
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'position'.
          position: 'absolute',
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h4" sx={{ color: 'primary.main' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {title}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ mt: 1, mb: 3, color: 'common.white' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {description}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'href'.
        <Button href={path} variant="contained">
          // @ts-expect-error TS(2304): Cannot find name 'Go'.
          Go Now
        </Button>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'alt'.
      <Image alt="advertisement" src={imageUrl} ratio="1/1" />

      // @ts-expect-error TS(2749): 'StyledOverlay' refers to a value, but is being us... Remove this comment to see the full error message
      <StyledOverlay />
    </Box>
  );
}

Advertisement.propTypes = {
  advertisement: PropTypes.shape({
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  sx: PropTypes.object,
};
