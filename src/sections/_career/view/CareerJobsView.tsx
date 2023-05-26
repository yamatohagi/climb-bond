import { useState, useEffect } from 'react';
// @mui
import { Container } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _jobs } from 'src/_mock';
//
import NewsletterCareer from '../../newsletter/career';
import { CareerJobList } from '../job/list';
import CareerFilters from '../job/filters';

// ----------------------------------------------------------------------

export default function CareerJobsView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  return (
    <>
      <Container>
        <CareerFilters />

        <CareerJobList jobs={_jobs} loading={loading} />
      </Container>

      <NewsletterCareer />
    </>
  );
}
