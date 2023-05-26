import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Stack, Link } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';
//
import PostTimeBlock from '../../components/PostTimeBlock';

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

export default function PostItem({
  post,
  order,
  largePost
}: any) {
  const { title, duration, coverImg, description, createdAt } = post;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={2}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(largePost && {
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }),
      }}
    >
      <Image
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        src={coverImg}
        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        alt={title}
        // @ts-expect-error TS(2304): Cannot find name 'ratio'.
        ratio={(largePost && '3/4') || (order && '4/3') || '1/1'}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ borderRadius: 2 }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={largePost ? 2 : 1}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(largePost && {
            p: 5,
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
          }),
        }}
      >
        // @ts-expect-error TS(2709): Cannot use namespace 'PostTimeBlock' as a type.
        <PostTimeBlock
          // @ts-expect-error TS(2304): Cannot find name 'createdAt'.
          createdAt={fDate(createdAt)}
          // @ts-expect-error TS(2304): Cannot find name 'duration'.
          duration={duration}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            ...(largePost && { opacity: 0.72, color: 'inherit' }),
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        />

        // @ts-expect-error TS(2304): Cannot find name 'component'.
        <Link component={NextLink} href={paths.career.post} color="inherit">
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant={largePost ? 'h3' : 'h6'}>{title}</TextMaxLine>
        </Link>

        // @ts-expect-error TS(2304): Cannot find name 'largePost'.
        {largePost && <Typography sx={{ opacity: 0.48 }}>{description}</Typography>}
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'largePost'.
      {largePost && <StyledOverlay />}
    </Stack>
  );
}

PostItem.propTypes = {
  largePost: PropTypes.bool,
  order: PropTypes.number,
  post: PropTypes.shape({
    coverImg: PropTypes.string,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    description: PropTypes.string,
    duration: PropTypes.string,
    title: PropTypes.string,
  }),
};
