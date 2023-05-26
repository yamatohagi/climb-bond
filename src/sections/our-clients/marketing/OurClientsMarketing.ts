// @mui
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';
// @ts-expect-error TS(2307): Cannot find module 'src/components/carousel' or it... Remove this comment to see the full error message
import Carousel from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function OurClientsMarketing({
  brands
}: any) {
  const theme = useTheme();

  const carouselSettings = {
    speed: 5000,
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplaySpeed: 5000,
    rtl: Boolean(theme.direction === 'rtl'),
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
        pt: { xs: 5, md: 10 },
      }}
    // @ts-expect-error TS(2365): Operator '>' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(2304): Cannot find name 'carouselSettings'.
      <Carousel {...carouselSettings}>
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {brands.map((brand: any) => <SvgColor
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={brand.id}
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          src={brand.image}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ width: 106, height: 32, color: 'grey.500', opacity: 0.8 }}
        />)}
      </Carousel>
    </Container>
  );
}

OurClientsMarketing.propTypes = {
  brands: PropTypes.array,
};
