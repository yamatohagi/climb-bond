import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Container, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/carousel' or it... Remove this comment to see the full error message
import Carousel, { CarouselArrows, CarouselDots } from 'src/components/carousel';
//
import TestimonialItem from './TestimonialItem';

// ----------------------------------------------------------------------

TestimonialTravel.propTypes = {
  testimonials: PropTypes.array,
};

export default function TestimonialTravel({ testimonials }: any) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: !isMdUp,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
  };

  const handlePrev = () => {
    // @ts-expect-error TS(2339): Property 'slickPrev' does not exist on type 'never... Remove this comment to see the full error message
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    // @ts-expect-error TS(2339): Property 'slickNext' does not exist on type 'never... Remove this comment to see the full error message
    carouselRef.current?.slickNext();
  };

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            What Our Customer Say
          </Typography>

          <Carousel ref={carouselRef} {...carouselSettings}>
            {testimonials.map((testimonial: any) => (
              <TestimonialItem key={testimonial.id} testimonial={testimonial} />
            ))}
          </Carousel>
        </Grid>

        {isMdUp && (
          <Grid xs={12} md={6}>
            <Image
              alt="travel testimonial"
              src="/assets/images/travel/travel_testimonial.png"
              sx={{ maxWidth: 296, ml: 'auto' }}
            />
          </Grid>
        )}
      </Grid>

      {isMdUp && (
        <CarouselArrows
          spacing={2}
          justifyContent={{ xs: 'center', md: 'unset' }}
          onNext={handleNext}
          onPrev={handlePrev}
          sx={{ mt: 10 }}
        />
      )}
    </Container>
  );
}
