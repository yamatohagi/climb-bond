import PropTypes from 'prop-types';
import { Pagination, Box } from '@mui/material';
import { ClimberPostItem, ClimberPostItemSkeleton } from '../components';
import { Fragment } from 'react';
import { SortOrder, usePostsQuery } from 'src/generated/graphql';
export default function ClimberPostList() {
  const { error, data, loading } = usePostsQuery({
    variables: { orderBy: [{ createdAt: SortOrder.Desc }] },
  });
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
        {(loading || !data ? [...Array(9)] : data.posts).map((post, index) => (
          <Fragment key={index}>
            {post ? <ClimberPostItem post={post} /> : <ClimberPostItemSkeleton />}
          </Fragment>
        ))}
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
