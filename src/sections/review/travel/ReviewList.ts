// @mui
import PropTypes from 'prop-types';
import { Box, Pagination } from '@mui/material';
//
// @ts-expect-error TS(6142): Module './ReviewItem' was resolved to '/Users/yama... Remove this comment to see the full error message
import ReviewItem from './ReviewItem';

// ----------------------------------------------------------------------

export default function ReviewList({
  reviews
}: any) {
  return <>
    {reviews.map((review: any) => {
      const { id, name, rating, helpful, message, postedAt, avatarUrl, replyComment, users } =
        review;

      const hasReply = !!replyComment.length;

      return (
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box key={id}>
          // @ts-expect-error TS(2709): Cannot use namespace 'ReviewItem' as a type.
          <ReviewItem
            name={name}
            // @ts-expect-error TS(2588): Cannot assign to 'avatarUrl' because it is a const... Remove this comment to see the full error message
            avatarUrl={avatarUrl}
            // @ts-expect-error TS(2588): Cannot assign to 'postedAt' because it is a consta... Remove this comment to see the full error message
            postedAt={postedAt}
            // @ts-expect-error TS(2588): Cannot assign to 'message' because it is a constan... Remove this comment to see the full error message
            message={message}
            // @ts-expect-error TS(2588): Cannot assign to 'rating' because it is a constant... Remove this comment to see the full error message
            rating={rating}
            // @ts-expect-error TS(2588): Cannot assign to 'helpful' because it is a constan... Remove this comment to see the full error message
            helpful={helpful}
          />

          {hasReply &&
            replyComment.map((reply: any) => {
              const userReply = users.filter((user: any) => user.id === reply.userId)[0];

              return (
                // @ts-expect-error TS(2709): Cannot use namespace 'ReviewItem' as a type.
                <ReviewItem
                  // @ts-expect-error TS(2304): Cannot find name 'key'.
                  key={reply.id}
                  // @ts-expect-error TS(2304): Cannot find name 'tagUser'.
                  tagUser={reply.tagUser}
                  // @ts-expect-error TS(2588): Cannot assign to 'postedAt' because it is a consta... Remove this comment to see the full error message
                  postedAt={reply.postedAt}
                  // @ts-expect-error TS(2588): Cannot assign to 'message' because it is a constan... Remove this comment to see the full error message
                  message={reply.message}
                  // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
                  name={userReply.name}
                  // @ts-expect-error TS(2588): Cannot assign to 'avatarUrl' because it is a const... Remove this comment to see the full error message
                  avatarUrl={userReply.avatarUrl}
                  // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
                  hasReply
                />
              );
            })}
        </Box>
      );
    })}

    // @ts-expect-error TS(2749): 'Pagination' refers to a value, but is being used ... Remove this comment to see the full error message
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
  </>;
}

ReviewList.propTypes = {
  reviews: PropTypes.array,
};
