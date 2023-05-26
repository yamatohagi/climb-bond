import { useState, useEffect } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import {
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials, _tours } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/loading-screen'... Remove this comment to see the full error message
import LoadingScreen from 'src/components/loading-screen';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import ReviewTravel from '../../review/travel';
import NewsletterTravel from '../../newsletter/travel';
import {
  TravelTourDetailsHeader,
  TravelTourDetailsGallery,
  TravelTourDetailsSummary,
  TravelTourDetailsReserveForm,
} from '../tour/details';
import { TravelTourListSimilar } from '../tour/list';

// ----------------------------------------------------------------------

const _mockTour = _tours[0];

export default function TravelTourView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Tours', href: paths.travel.tours },
            { name: _mockTour.slug },
          ]}
          sx={{ mt: 3, mb: 5 }}
        />

        <TravelTourDetailsGallery images={_mockTour.gallery} />

        <Grid container columnSpacing={8} rowSpacing={5} direction="row-reverse">
          <Grid xs={12} md={5} lg={4}>
            <TravelTourDetailsReserveForm tour={_mockTour} />
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <TravelTourDetailsHeader tour={_mockTour} />

            <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

            <TravelTourDetailsSummary tour={_mockTour} />

            <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
              <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                Share:
              </Typography>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
                {_socials.map((social: any) => (
                  <Button
                    key={social.value}
                    size="small"
                    variant="outlined"
                    startIcon={<Iconify icon={social.icon} />}
                    sx={{
                      m: 0.5,
                      flexShrink: 0,
                      color: social.color,
                      borderColor: social.color,
                      '&:hover': {
                        borderColor: social.color,
                        bgcolor: alpha(social.color, 0.08),
                      },
                    }}
                  >
                    {social.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 10 }} />

      <ReviewTravel />

      <TravelTourListSimilar tours={_tours.slice(-4)} />

      <NewsletterTravel />
    </>
  );
}
