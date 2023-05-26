// @mui
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
//
import PostItemMobile from '../components/PostItemMobile';

// ----------------------------------------------------------------------

export default function BlogSidebarRecentPosts({
  recentPosts
}: any) {
  const { list } = recentPosts;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={3}>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h5">Recent Posts</Typography>

      // @ts-expect-error TS(2709): Cannot use namespace 'PostItemMobile' as a type.
      {list.map((post: any) => <PostItemMobile key={post.id} post={post} onSiderbar />)}
    </Stack>
  );
}

BlogSidebarRecentPosts.propTypes = {
  recentPosts: PropTypes.object,
};
