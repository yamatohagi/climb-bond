import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, Typography, Fab } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
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
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function PostItemCarouse({
  post
}: any) {
  const { title, coverImg, description, createdAt } = post;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack sx={{ position: 'relative' }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: 1,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 1,
          // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
          zIndex: 9,
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'position'.
          position: 'absolute',
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color: 'common.white',
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'flex',
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent: 'center',
        }}
      >
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box sx={{ mx: 'auto', maxWidth: 400 }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {fDate(createdAt: any)}
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h3" sx={{ mt: 1, mb: 5 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {title}
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ opacity: 0.72, mb: 10 }}>{description}</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'component'.
          <Fab component={NextLink} href={paths.travel.post}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:chevron-right" />
          </Fab>
        </Box>
      </Stack>

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <StyledOverlay />

      <Image
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        src={coverImg}
        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        alt={title}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: 1,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: { xs: 720, md: 960 },
        }}
      />
    </Stack>
  );
}

PostItemCarouse.propTypes = {
  post: PropTypes.shape({
    coverImg: PropTypes.string,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};
