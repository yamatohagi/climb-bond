import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link, Avatar } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';
//
import PostTimeBlock from '../../components/PostTimeBlock';

// ----------------------------------------------------------------------

export default function PostItem({
  post
}: any) {
  const { title, duration, coverImg, author, createdAt } = post;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={2.5}>
      // @ts-expect-error TS(2304): Cannot find name 'src'.
      <Image src={coverImg} alt={title} ratio="1/1" sx={{ borderRadius: 2 }} />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1}>
        // @ts-expect-error TS(2709): Cannot use namespace 'PostTimeBlock' as a type.
        <PostTimeBlock createdAt={fDate(createdAt)} duration={duration} />

        // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Link component={NextLink} href={paths.travel.post} color="inherit">
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="h6" persistent>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {title}
          </TextMaxLine>
        </Link>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1} direction="row" alignItems="center">
        // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Avatar src={author.picture} sx={{ width: 32, height: 32 }} />
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2">{author.name}</Typography>
      </Stack>
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
