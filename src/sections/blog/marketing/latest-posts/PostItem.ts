import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Link, Stack, Avatar } from '@mui/material';
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
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { varHover, varTranHover } from 'src/components/animate';
//
import PostTimeBlock from '../../components/PostTimeBlock';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    direction: 'to top',
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
  post
}: any) {
  const { title, duration, coverImg, author, createdAt } = post;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={m.div}
      // @ts-expect-error TS(2304): Cannot find name 'whileHover'.
      whileHover="hover"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'overflow'.
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'relative',
        // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
        boxShadow: (theme: any) => theme.customShadows.z12,
      }}
    >
      // @ts-expect-error TS(2503): Cannot find namespace 'm'.
      <m.div variants={varHover(1.25)} transition={varTranHover()}>
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        <Image src={coverImg} alt={title} ratio="3/4" />
      </m.div>

      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="space-between"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 5,
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width: 1,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 1,
          // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
          zIndex: 9,
          // @ts-expect-error TS(2304): Cannot find name 'position'.
          position: 'absolute',
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color: 'common.white',
        }}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={2}>
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

          <Link
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            component={NextLink}
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href={paths.marketing.post}
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="h4"
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="inherit"
            // @ts-expect-error TS(2304): Cannot find name 'underline'.
            underline="none"
          >
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {title}
          </Link>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Avatar src={author.picture} sx={{ mr: 1 }} />
          // @ts-expect-error TS(2304): Cannot find name 'author'.
          {author.name}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Stack>
      </Stack>

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <StyledOverlay />
    </Stack>
  );
}

PostItem.propTypes = {
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
    duration: PropTypes.string,
    title: PropTypes.string,
  }),
};
