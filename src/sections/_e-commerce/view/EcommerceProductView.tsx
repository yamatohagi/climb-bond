import { useState, useEffect } from 'react';
// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _products } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// @ts-expect-error TS(2307): Cannot find module 'src/components/loading-screen'... Remove this comment to see the full error message
import LoadingScreen from 'src/components/loading-screen';
//
import ReviewEcommerce from '../../review/e-commerce';
import { EcommerceHeader } from '../layout';
import {
  EcommerceProductDetailsInfo,
  EcommerceProductDetailsCarousel,
  EcommerceProductDetailsDescription,
} from '../product/details';

// ----------------------------------------------------------------------

const _mockProduct = _products[0];

export default function EcommerceProductView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  if (loading) {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <LoadingScreen />;
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <EcommerceHeader />

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Container sx={{ overflow: 'hidden' }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CustomBreadcrumbs
          links={[
            {
              name: 'Home',
            },
            {
              name: 'Mobile Phones',
            },
            {
              name: 'Apple iPhone 14',
            },
          ]}
          sx={{ my: 5 }}
        />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid container spacing={{ xs: 5, md: 8 }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Grid xs={12} md={6} lg={7}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <EcommerceProductDetailsCarousel images={_mockProduct.images} />
          </Grid>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Grid xs={12} md={6} lg={5}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <EcommerceProductDetailsInfo
              name={_mockProduct.name}
              price={_mockProduct.price}
              rating={_mockProduct.rating}
              review={_mockProduct.review}
              priceSale={_mockProduct.priceSale}
              caption={_mockProduct.caption}
            />
          </Grid>
        </Grid>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid container columnSpacing={{ md: 8 }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Grid xs={12} md={6} lg={7}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <EcommerceProductDetailsDescription
              description={_mockProduct.description}
              specifications={[
                { label: 'Category', value: 'Mobile' },
                { label: 'Manufacturer', value: 'Apple' },
                { label: 'Warranty', value: '12 Months' },
                { label: 'Serial number', value: '358607726380311' },
                { label: 'Ships From', value: 'United States' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ReviewEcommerce />
    </>
  );
}
