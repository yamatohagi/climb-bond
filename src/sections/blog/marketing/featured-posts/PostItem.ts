import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Avatar, Link } from '@mui/material';
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
  const { title, duration, coverImg, author, description, createdAt } = post;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        xs: 'column',
        // @ts-expect-error TS(2304): Cannot find name 'md'.
        md: 'row',
      }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ bgcolor: 'background.default', borderRadius: 2 }}
    >
      // @ts-expect-error TS(2304): Cannot find name 'src'.
      <Image src={coverImg} alt={title} sx={{ flexGrow: 1, height: { md: 560 } }} />

      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="space-between"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mx: 'auto',
          // @ts-expect-error TS(2304): Cannot find name 'p'.
          p: { xs: 3, md: 5 },
          maxWidth: { md: 396 },
        }}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={1}>
          // @ts-expect-error TS(2709): Cannot use namespace 'PostTimeBlock' as a type.
          <PostTimeBlock createdAt={fDate(createdAt)} duration={duration} />

          // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Link component={NextLink} href={paths.marketing.post} color="inherit" variant="h3">
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {title}
          </Link>

          // @ts-expect-error TS(2304): Cannot find name 'line'.
          <TextMaxLine line={3} variant="body2" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {description}
          </TextMaxLine>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" alignItems="center" sx={{ pt: 2, typography: 'body2' }}>
          // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Avatar src={author.picture} sx={{ mr: 1 }} />
          // @ts-expect-error TS(2304): Cannot find name 'author'.
          {author.name}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Stack>
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
    description: PropTypes.string,
    duration: PropTypes.string,
    title: PropTypes.string,
  }),
};
