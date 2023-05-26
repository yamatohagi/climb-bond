import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Link, Avatar, Typography } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
//
import PostTimeBlock from '../../components/PostTimeBlock';

// ----------------------------------------------------------------------

export default function PostItem({
  post,
  index
}: any) {
  const { title, duration, coverImg, author, description, createdAt } = post;

  const noImage = index === 1 || index === 4;

  const smallImage = index === 2 || index === 7;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'overflow'.
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'relative',
      }}
    >
      // @ts-expect-error TS(2552): Cannot find name 'noImage'. Did you mean 'Image'?
      {!noImage && <Image src={coverImg} alt={title} ratio={smallImage ? '4/3' : '1/1'} />}

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={1}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 3,
          // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
          bgcolor: 'background.neutral',
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(noImage && {
            bgcolor: 'primary.lighter',
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
            ...(noImage && { color: 'grey.500' }),
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        />

        <Link
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          component={NextLink}
          // @ts-expect-error TS(2304): Cannot find name 'href'.
          href={paths.career.post}
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="inherit"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="h5"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            ...(noImage && {
              color: 'grey.800',
            }),
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {title}
        </Link>

        <Typography
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="body2"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            color: 'text.secondary',
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            ...(noImage && {
              color: 'grey.600',
            }),
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {description}
        </Typography>

        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction="row"
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems="center"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            typography: 'body2',
            // @ts-expect-error TS(2304): Cannot find name 'pt'.
            pt: 1.5,
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            ...(noImage && {
              color: 'grey.800',
            }),
          }}
        >
          // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Avatar src={author?.picture} sx={{ mr: 1 }} />
          // @ts-expect-error TS(2304): Cannot find name 'author'.
          {author?.name}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Stack>
      </Stack>
    </Stack>
  );
}

PostItem.propTypes = {
  index: PropTypes.number,
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
