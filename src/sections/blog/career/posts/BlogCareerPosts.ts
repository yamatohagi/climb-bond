// @mui
import PropTypes from 'prop-types';
import Masonry from '@mui/lab/Masonry';
import { Button, Stack } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import PostItem from './PostItem';

// ----------------------------------------------------------------------

export default function BlogCareerPosts({
  posts
}: any) {
  return <>
    // @ts-expect-error TS(2749): 'Masonry' refers to a value, but is being used as ... Remove this comment to see the full error message
    <Masonry
      // @ts-expect-error TS(2304): Cannot find name 'columns'.
      columns={{ xs: 1, sm: 2 }}
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={4}
      // @ts-expect-error TS(2304): Cannot find name 'defaultColumns'.
      defaultColumns={1}
      // @ts-expect-error TS(2304): Cannot find name 'defaultSpacing'.
      defaultSpacing={4}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        mx: { xs: 'unset', sm: 0 },
      }}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {posts.slice(0, 8).map((post: any, index: any) => (
        // @ts-expect-error TS(2709): Cannot use namespace 'PostItem' as a type.
        <PostItem key={post.id} post={post} index={index} />
      ))}
    </Masonry>

    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems="center"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: 5,
        // @ts-expect-error TS(2304): Cannot find name 'pb'.
        pb: { xs: 10, md: 0 },
      }}
    >
      // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Button
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        size="large"
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color="inherit"
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="outlined"
        // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
        endIcon={<Iconify icon="carbon:arrow-down" />}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Load'.
        Load more
      </Button>
    </Stack>
  </>;
}

BlogCareerPosts.propTypes = {
  posts: PropTypes.array,
};
