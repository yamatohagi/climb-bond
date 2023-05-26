import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Box, Stack, Button, Container, Typography } from '@mui/material';
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

export default function BlogTravelLatestPosts({
  posts
}: any) {
  const isMdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Button
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={NextLink}
      // @ts-expect-error TS(2304): Cannot find name 'href'.
      href={paths.travel.posts}
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
    <Box
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        bgcolor: 'background.neutral',
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
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
            gap: 3,
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display: 'grid',
            // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
            gridTemplateColumns: {
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              xs: 'repeat(1, 1fr)',
              // @ts-expect-error TS(2304): Cannot find name 'sm'.
              sm: 'repeat(2, 1fr)',
              // @ts-expect-error TS(2304): Cannot find name 'md'.
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          // @ts-expect-error TS(2349): This expression is not callable.
          {posts
            .slice(0, 4)
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
    </Box>
  );
}

BlogTravelLatestPosts.propTypes = {
  posts: PropTypes.array,
};
