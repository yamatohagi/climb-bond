import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import Masonry from '@mui/lab/Masonry';
import { Container, Typography, Stack, Button, Box } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import PostItemMobile from '../../components/PostItemMobile';
import PostItem from './PostItem';

// ----------------------------------------------------------------------

export default function BlogCareerLatestPosts({
  posts
}: any) {
  const isMdUp = useResponsive('up', 'md');

  const latestPost = posts[0];

  const viewAllBtn = (
    // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Button
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={NextLink}
      // @ts-expect-error TS(2304): Cannot find name 'href'.
      href={paths.career.posts}
      // @ts-expect-error TS(2304): Cannot find name 'color'.
      color="inherit"
      // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      // @ts-expect-error TS(2304): Cannot find name 'View'.
      View All
    </Button>
  );

  return (
    <Container
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: { xs: 5, md: 10 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: 10,
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        direction="row"
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent={{ xs: 'center', md: 'space-between' }}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mb: { xs: 8, md: 10 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            maxWidth: { md: 460 },
          }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(2304): Cannot find name 'BLOG'.
            BLOG
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h2" sx={{ my: 3 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Read'.
            Read Our Lates News
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Aenean'.
            Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et, volutpat molestie,
            // @ts-expect-error TS(2304): Cannot find name 'porta'.
            porta ut, ligula.
          </Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
        {isMdUp && viewAllBtn}
      </Stack>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'gap'.
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {isMdUp ? (
          <>
            // @ts-expect-error TS(2749): 'PostItem' refers to a value, but is being used as... Remove this comment to see the full error message
            <PostItem post={latestPost} largePost />

            // @ts-expect-error TS(2749): 'Masonry' refers to a value, but is being used as ... Remove this comment to see the full error message
            <Masonry columns={{ xs: 1, md: 2 }} spacing={4}>
              // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
              {posts.slice(1, 5).map((post: any, index: any) => (
                // @ts-expect-error TS(2749): 'PostItem' refers to a value, but is being used as... Remove this comment to see the full error message
                <PostItem key={post.id} post={post} order={index % 2} />
              ))}
            </Masonry>
          </>
        ) : (
          <>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {posts.slice(0, 5).map((post: any) => <PostItemMobile key={post.id} post={post} />)}
          </>
        )}
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
      {!isMdUp && (
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack alignItems="center" sx={{ mt: 8 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}

BlogCareerLatestPosts.propTypes = {
  posts: PropTypes.array,
};
