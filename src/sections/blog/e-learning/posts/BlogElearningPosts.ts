// @mui
import PropTypes from 'prop-types';
import { Pagination, Box } from '@mui/material';
//
import PostItem from './PostItem';

// ----------------------------------------------------------------------

export default function BlogElearningPosts({
  posts
}: any) {
  return <>
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        columnGap: 4,
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display: 'grid',
        // @ts-expect-error TS(2304): Cannot find name 'rowGap'.
        rowGap: { xs: 4, md: 5 },
        gridTemplateColumns: {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          xs: 'repeat(1, 1fr)',
          // @ts-expect-error TS(2304): Cannot find name 'sm'.
          sm: 'repeat(2, 1fr)',
        },
      }}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(2709): Cannot use namespace 'PostItem' as a type.
      {posts.slice(0, 8).map((post: any) => <PostItem key={post.id} post={post} />)}
    </Box>

    <Pagination
      // @ts-expect-error TS(2304): Cannot find name 'count'.
      count={10}
      // @ts-expect-error TS(2304): Cannot find name 'color'.
      color="primary"
      // @ts-expect-error TS(2304): Cannot find name 'size'.
      size="large"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 8, md: 10 },
        '& .MuiPagination-ul': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          justifyContent: 'center',
        },
      }}
    />
  </>;
}

BlogElearningPosts.propTypes = {
  posts: PropTypes.array,
};
