import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Stack, Typography, Box } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/carousel' or it... Remove this comment to see the full error message
import Carousel, { CarouselArrows } from 'src/components/carousel';
//
import { ElearningCourseItem } from '../course/item';

// ----------------------------------------------------------------------

export default function ElearningLandingFeaturedCourses({
  courses
}: any) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef(null);

  const carouselSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 1 },
      },
    ],
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
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ md: 'flex-end' }}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Stack spacing={3} flexGrow={1}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant="h2">Featured Courses</Typography>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography sx={{ color: 'text.secondary' }}>
            Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.
          </Typography>
        </Stack>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {isMdUp && <CarouselArrows spacing={2} onNext={handleNext} onPrev={handlePrev} />}
      </Stack>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box
        sx={{
          position: 'relative',
          ml: { md: -2 },
          width: { md: 'calc(100% + 32px)' },
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CarouselArrows
          onNext={handleNext}
          onPrev={handlePrev}
          leftButtonProps={{
            sx: {
              left: -16,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              ...(isMdUp && { display: 'none' }),
            },
          }}
          rightButtonProps={{
            sx: {
              right: -16,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              ...(isMdUp && { display: 'none' }),
            },
          }}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Carousel ref={carouselRef} {...carouselSettings}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {courses.map((course: any) => <Box
              key={course.id}
              sx={{
                px: 2,
                pt: { xs: 8, md: 10 },
                pb: { xs: 10, md: 15 },
              }}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ElearningCourseItem course={course} vertical />
            </Box>)}
          </Carousel>
        </CarouselArrows>
      </Box>
    </Container>
  );
}

ElearningLandingFeaturedCourses.propTypes = {
  courses: PropTypes.array,
};
