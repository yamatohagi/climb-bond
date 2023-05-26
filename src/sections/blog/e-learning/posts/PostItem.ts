import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Avatar, Typography, Paper, Divider, Link } from '@mui/material';
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

// ----------------------------------------------------------------------

export default function PostItem({
  post
}: any) {
  const { title, duration, coverImg, description, author, createdAt } = post;

  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
      // @ts-expect-error TS(2304): Cannot find name 'src'.
      <Image src={coverImg} alt={title} ratio="1/1" />

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack direction="row" spacing={3} sx={{ p: 3 }}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack sx={{ textAlign: 'center' }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="subtitle2">{fDate(createdAt: any, 'MMM')}</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Divider sx={{ mt: 1, mb: 0.5 }} />

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h3">{fDate(createdAt: any, 'dd')}</Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1}>
          // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Link component={NextLink} href={paths.eLearning.post} color="inherit">
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <TextMaxLine variant="h6" persistent>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {title}
            </TextMaxLine>
          </Link>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="body2" persistent color="text.secondary">
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {description}
          </TextMaxLine>

          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          <Stack spacing={1.5} direction="row" alignItems="center" sx={{ pt: 1.5 }}>
            // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
            <Avatar src={author.picture} sx={{ width: 40, height: 40 }} />
            <Stack>
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="body2">{author.name}</Typography>
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {duration}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
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
