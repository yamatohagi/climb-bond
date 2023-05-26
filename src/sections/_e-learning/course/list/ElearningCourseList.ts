import PropTypes from 'prop-types';
// @mui
import { Pagination, Stack } from '@mui/material';
//
import { ElearningCourseItem, ElearningCourseItemSkeleton } from '../item';

// ----------------------------------------------------------------------

export default function ElearningCourseList({
  courses,
  loading
}: any) {
  return <>
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={4}>
      // @ts-expect-error TS(2349): This expression is not callable.
      {(loading ? [...Array(9)] : courses).map((course: any, index: any) =>
        course ? (
          // @ts-expect-error TS(2709): Cannot use namespace 'ElearningCourseItem' as a ty... Remove this comment to see the full error message
          <ElearningCourseItem key={course.id} course={course} />
        ) : (
          // @ts-expect-error TS(2709): Cannot use namespace 'ElearningCourseItemSkeleton'... Remove this comment to see the full error message
          <ElearningCourseItemSkeleton key={index} />
        )
      )}
    </Stack>

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
        my: 10,
        '& .MuiPagination-ul': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          justifyContent: 'center',
        },
      }}
    />
  </>;
}

ElearningCourseList.propTypes = {
  courses: PropTypes.array,
  loading: PropTypes.bool,
};
