import PropTypes from 'prop-types';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Card, Box, Stack, IconButton } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  '&:hover': { opacity: 1 },
}));

// ----------------------------------------------------------------------

export default function TeamMember({
  member
}: any) {
  const { name, role, photo } = member;

  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={0.5} sx={{ textAlign: 'center', pt: 3, pb: 1.5 }}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h6">{name}</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {role}
        </Typography>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Box sx={{ position: 'relative' }}>
        // @ts-expect-error TS(2749): 'Shape' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Shape />

        <StyledOverlay>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            direction="row"
            // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
            justifyContent="center"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ width: 1, zIndex: 9, bottom: 24, position: 'absolute' }}
          >
            // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
            {_socials.map((social: any) => <IconButton key={social.value} color="primary">
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              <Iconify icon={social.icon} />
            </IconButton>)}
          </Stack>
        </StyledOverlay>

        // @ts-expect-error TS(2304): Cannot find name 'src'.
        <Image src={photo} alt={name} ratio="1/1" />
      </Box>
    </Card>
  );
}

TeamMember.propTypes = {
  member: PropTypes.object,
};

// ----------------------------------------------------------------------

function Shape() {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        top: 0,
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        width: 1,
        // @ts-expect-error TS(2304): Cannot find name 'height'.
        height: 8,
        // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
        zIndex: 9,
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'absolute',
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color: 'background.paper',
      }}
    >
      // @ts-expect-error TS(2304): Cannot find name 'svg'.
      <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="32" viewBox="0 0 1080 32">
        // @ts-expect-error TS(2304): Cannot find name 'path'.
        <path fill="currentColor" d="M1080 32L0 0h1080v32z" />
      </svg>
    </Box>
  );
}
