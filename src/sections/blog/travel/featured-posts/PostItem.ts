import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, Avatar, Link } from '@mui/material';
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
  largePost
}: any) {
  const { title, description, duration, createdAt, author, coverImg } = post;

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
      // @ts-expect-error TS(2304): Cannot find name 'src'.
      <Image src={coverImg} alt={title} ratio="1/1" />

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={1}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 3,
          // @ts-expect-error TS(2304): Cannot find name 'bottom'.
          bottom: 0,
          // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
          zIndex: 9,
          // @ts-expect-error TS(2304): Cannot find name 'position'.
          position: 'absolute',
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color: 'common.white',
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(largePost && {
            p: { xs: 3, md: 5 },
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
          sx={{ color: 'inherit', opacity: 0.72 }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        />

        // @ts-expect-error TS(2304): Cannot find name 'component'.
        <Link component={NextLink} href={paths.travel.post} color="inherit">
          <TextMaxLine
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              typography: 'h6',
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              ...(largePost && {
                typography: { xs: 'h6', md: 'h4' },
              }),
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          >
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {title}
          </TextMaxLine>
        </Link>

        // @ts-expect-error TS(2304): Cannot find name 'largePost'.
        {largePost && <TextMaxLine sx={{ opacity: 0.48 }}>{description}</TextMaxLine>}

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" alignItems="center" sx={{ typography: 'body2', pt: 1.5 }}>
          // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Avatar
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            src={author.picture}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              mr: 1,
              // @ts-expect-error TS(2304): Cannot find name 'width'.
              width: 32,
              // @ts-expect-error TS(2304): Cannot find name 'height'.
              height: 32,
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              ...(largePost && {
                width: { xs: 32, md: 40 },
                height: { xs: 32, md: 40 },
              }),
            }}
          />
          // @ts-expect-error TS(2304): Cannot find name 'author'.
          {author.name}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Stack>
      </Stack>

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <StyledOverlay />
    </Box>
  );
}

PostItem.propTypes = {
  largePost: PropTypes.bool,
  post: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      picture: PropTypes.string,
    }),
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
