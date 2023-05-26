import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Box, Container, Typography, Stack, Button } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import PostItem from '../posts/PostItem';
import PostItemMobile from '../../components/PostItemMobile';

// ----------------------------------------------------------------------

export default function BlogElearningLatestPosts({
  posts
}: any) {
  const isMdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Button
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={NextLink}
      // @ts-expect-error TS(2304): Cannot find name 'href'.
      href={paths.eLearning.posts}
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
        py: { xs: 10, md: 15 },
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
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h3">Latest Posts</Typography>

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
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        // @ts-expect-error TS(2349): This expression is not callable.
        {posts
          .slice(0, 3)
          // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
          .map((post: any) => isMdUp ? (
          // @ts-expect-error TS(2709): Cannot use namespace 'PostItem' as a type.
          <PostItem key={post.id} post={post} />
        ) : (
          // @ts-expect-error TS(2709): Cannot use namespace 'PostItemMobile' as a type.
          <PostItemMobile key={post.id} post={post} />
        )
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

BlogElearningLatestPosts.propTypes = {
  posts: PropTypes.array,
};
