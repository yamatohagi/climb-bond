import PropTypes from 'prop-types';
// @mui
import { Pagination, Box } from '@mui/material';
//
import { CareerJobItem, CareerJobItemSkeleton } from '../item';

// ----------------------------------------------------------------------

export default function CareerJobList({
  jobs,
  loading
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
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md: 'repeat(3, 1fr)',
        },
      }}
    >
      // @ts-expect-error TS(2349): This expression is not callable.
      {(loading ? [...Array(9)] : jobs).map((job: any, index: any) =>
        // @ts-expect-error TS(2709): Cannot use namespace 'CareerJobItem' as a type.
        job ? <CareerJobItem key={job.id} job={job} /> : <CareerJobItemSkeleton key={index} />
      )}
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
        my: 10,
        '& .MuiPagination-ul': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          justifyContent: 'center',
        },
      }}
    />
  </>;
}

CareerJobList.propTypes = {
  jobs: PropTypes.array,
  loading: PropTypes.bool,
};
