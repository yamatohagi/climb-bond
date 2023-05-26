import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Typography, Container, Stack, Avatar, Link, Box } from '@mui/material';
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

export default function BlogElearningFeaturedPost({
  post
}: any) {
  const { title, duration, coverImg, description, author, createdAt } = post;

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        bgcolor: 'background.neutral',
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: { xs: 8, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack direction={{ xs: 'column', md: 'row' }}>
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <Image src={coverImg} alt={title} sx={{ flexGrow: 1, height: 560, borderRadius: 2 }} />

          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            spacing={1}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              mx: 'auto',
              // @ts-expect-error TS(2304): Cannot find name 'pl'.
              pl: { md: 8 },
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              py: { xs: 3, md: 5 },
              maxWidth: { md: 408 },
            }}
          >
            // @ts-expect-error TS(2709): Cannot use namespace 'PostTimeBlock' as a type.
            <PostTimeBlock createdAt={fDate(createdAt)} duration={duration} />

            // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Link component={NextLink} href={paths.eLearning.post} color="inherit" variant="h3">
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {title}
            </Link>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ color: 'text.secondary', flexGrow: 1 }}>{description}</Typography>

            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            <Stack direction="row" alignItems="center" sx={{ pt: 1.5, typography: 'body2' }}>
              // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
              <Avatar src={author.picture} sx={{ mr: 1 }} />
              // @ts-expect-error TS(2304): Cannot find name 'author'.
              {author.name}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

BlogElearningFeaturedPost.propTypes = {
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
