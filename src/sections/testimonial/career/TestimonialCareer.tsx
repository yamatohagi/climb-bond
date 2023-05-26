import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Container, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/carousel' or it... Remove this comment to see the full error message
import Carousel, { CarouselArrows, CarouselDots } from 'src/components/carousel';
//
import TestimonialItem from './TestimonialItem';

// ----------------------------------------------------------------------

export default function TestimonialCareer({
  testimonials
}: any) {
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid container spacing={3} justifyContent="center">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Grid xs={12} md={6}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant="h2" sx={{ mb: 5, textAlign: 'center' }}>
              What Our Customer Say
            </Typography>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Carousel ref={carouselRef} {...carouselSettings}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              {testimonials.map((testimonial: any) => <TestimonialItem key={testimonial.id} testimonial={testimonial} />)}
            </Carousel>
          </Grid>
        </Grid>

        {isMdUp && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CarouselArrows
            spacing={2}
            justifyContent="center"
            onNext={handleNext}
            onPrev={handlePrev}
            sx={{ mt: 10, width: 1 }}
          />
        )}
      </Container>
    </Box>
  );
}

TestimonialCareer.propTypes = {
  testimonials: PropTypes.array,
};
