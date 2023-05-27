import PropTypes from 'prop-types';
// @mui
import { Pagination, Box } from '@mui/material';
//
import { ClimberPostItem, ClimberPostItemSkeleton } from '../item';

// ----------------------------------------------------------------------

export default function ClimberPostList({ posts, loading }: any) {
  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {(loading ? [...Array(9)] : posts).map((post: any, index: any) =>
          post ? (
            <ClimberPostItem key={post.id} post={post} />
          ) : (
            <ClimberPostItemSkeleton key={index} />
          )
        )}
      </Box>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          my: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

ClimberPostList.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
};
