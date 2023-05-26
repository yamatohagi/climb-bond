import { useState } from 'react';
// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _reviews, _tours } from 'src/_mock';
//
import { ReviewNewForm } from '../components';
import ReviewList from './ReviewList';
import ReviewToolbar from './ReviewToolbar';
import ReviewTourGuideInfo from './ReviewTourGuideInfo';

// ----------------------------------------------------------------------

const _mockTour = _tours[0];

export default function ReviewTravel() {
  const [sort, setSort] = useState('latest');

  const [openForm, setOpenForm] = useState(false);

  const handleChangeSort = (event: any) => {
    setSort(event.target.value);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Container sx={{ overflow: 'hidden' }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid container spacing={8}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Grid xs={12} md={5} lg={4}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ReviewTourGuideInfo tourGuide={_mockTour.tourGuide} />
          </Grid>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Grid xs={12} md={7} lg={8}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ReviewToolbar
              sort={sort}
              totalReview={_reviews.length}
              onChangeSort={handleChangeSort}
              onOpenReview={() => setOpenForm(!openForm)}
            />

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ReviewList reviews={_reviews} />
          </Grid>
        </Grid>
      </Container>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ReviewNewForm open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}
