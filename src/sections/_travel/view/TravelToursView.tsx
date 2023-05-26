import { useState, useEffect } from 'react';
// @mui
import { Container } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _tours } from 'src/_mock';
//
import NewsletterTravel from '../../newsletter/travel';
import { TravelTourList } from '../tour/list';
import TravelFilters from '../tour/filters';

// ----------------------------------------------------------------------

export default function TravelToursView() {
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
        <TravelFilters
          sx={{
            mt: 5,
            mb: { xs: 5, md: 10 },
          }}
        />

        <TravelTourList tours={_tours} loading={loading} />
      </Container>

      <NewsletterTravel />
    </>
  );
}
