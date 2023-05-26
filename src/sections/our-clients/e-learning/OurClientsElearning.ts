// @mui
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Typography, Stack, Container } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';
// @ts-expect-error TS(2307): Cannot find module 'src/components/carousel' or it... Remove this comment to see the full error message
import Carousel from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function CustomerElearning({
  brands
}: any) {
  const theme = useTheme();

  const carouselSettings = {
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: 10,
        // @ts-expect-error TS(2304): Cannot find name 'pb'.
        pb: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={3}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: { xs: 8, md: 10 },
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h2">We Work With</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Typography sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Quisque'.
          Quisque aliquet, libero consequat elementum convallis.
        </Typography>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'carouselSettings'.
      <Carousel {...carouselSettings}>
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {brands.map((brand: any) => <SvgColor key={brand.id} src={brand.image} sx={{ width: 106, height: 32 }} />)}
      </Carousel>
    </Container>
  );
}

CustomerElearning.propTypes = {
  brands: PropTypes.array,
};
