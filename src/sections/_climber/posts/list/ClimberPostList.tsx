import PropTypes from 'prop-types';
import { Pagination, Box } from '@mui/material';
import { ClimberPostItem, ClimberPostItemSkeleton } from '../components';
import { Fragment, useState } from 'react';
import { SortOrder, usePostsQuery } from 'src/generated/graphql';
import CreateButton from '../create/CreateButton';
import { use_CountQuery } from 'src/generated/graphql';
import { useRouter } from 'next/router';
export default function ClimberPostList() {
  const router = useRouter();
  const { query } = router;
  const page = query.page ? parseInt(query.page.toString()) : 1;

  const itemsPerPage = 5;

  const { error, data, loading, refetch } = usePostsQuery({
    variables: {
      orderBy: [{ createdAt: SortOrder.Desc }],
      take: itemsPerPage,
      skip: (page - 1) * itemsPerPage,
    },
  });
  const { data: postCountDate, loading: postCountLoading } = use_CountQuery();
  return (
    <>
      <CreateButton refetch={refetch} />
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
        count={
          postCountDate && !postCountLoading
            ? postCountDate?.aggregatePost._count?._all! / itemsPerPage
            : 100
        }
        color="primary"
        size="large"
        page={page} // Set the current page
        onChange={(event, value) => {
          router.push(`?page=${value}`, undefined, { shallow: true });
          window.scrollTo(0, 0);
        }}
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
