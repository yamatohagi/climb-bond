// @mui
import PropTypes from 'prop-types';
import { Pagination, Box } from '@mui/material';
//
import ReviewItem from './ReviewItem';

// ----------------------------------------------------------------------

export default function ReviewList({
  reviews
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box sx={{ pt: 5 }}>
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {reviews.map((review: any) => <ReviewItem
        // @ts-expect-error TS(2304): Cannot find name 'key'.
        key={review.id}
        // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
        name={review.name}
        // @ts-expect-error TS(2304): Cannot find name 'avatarUrl'.
        avatarUrl={review.avatarUrl}
        // @ts-expect-error TS(2304): Cannot find name 'postedAt'.
        postedAt={review.postedAt}
        // @ts-expect-error TS(2552): Cannot find name 'message'. Did you mean 'onmessag... Remove this comment to see the full error message
        message={review.message}
        // @ts-expect-error TS(2304): Cannot find name 'rating'.
        rating={review.rating}
        // @ts-expect-error TS(2304): Cannot find name 'helpful'.
        helpful={review.helpful}
      />)}

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
          mt: 5,
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: 10,
          '& .MuiPagination-ul': {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            justifyContent: 'center',
          },
        }}
      />
    </Box>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.array,
};
