import { useState } from 'react';
// @mui
import { Container } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _reviews } from 'src/_mock';
//
import ReviewNewForm from '../components/ReviewNewForm';
import ReviewList from './ReviewList';
import ReviewSummary from './ReviewSummary';

// ----------------------------------------------------------------------

export default function ReviewEcommerce() {
  const [openForm, setOpenForm] = useState(false);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ReviewSummary
        ratingsNumber={4.1}
        reviewsNumber={123456}
        onOpenForm={() => setOpenForm(true)}
      />

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ReviewList reviews={_reviews} />
      </Container>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ReviewNewForm open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}
