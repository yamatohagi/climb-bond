import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Box, Stack, IconButton } from '@mui/material';
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
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { varHover, varTranHover } from 'src/components/animate';

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
  member,
  ...other
}: any) {
  const { name, role, photo } = member;

  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack {...other}>
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component={m.div}
        // @ts-expect-error TS(2304): Cannot find name 'whileHover'.
        whileHover="hover"
        // @ts-expect-error TS(2304): Cannot find name 'variants'.
        variants={varHover(0.95)}
        // @ts-expect-error TS(2304): Cannot find name 'transition'.
        transition={varTranHover()}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
      >
        // @ts-expect-error TS(2749): 'StyledOverlay' refers to a value, but is being us... Remove this comment to see the full error message
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

        // @ts-expect-error TS(2304): Cannot find name 'variants'.
        <m.div variants={varHover(1.15)} transition={varTranHover()}>
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <Image src={photo} alt={name} ratio="3/4" />
        </m.div>
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={0.5} sx={{ mt: 2.5, textAlign: 'center' }}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h6">{name}</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {role}
        </Typography>
      </Stack>
    </Stack>
  );
}

TeamMember.propTypes = {
  member: PropTypes.object,
};
