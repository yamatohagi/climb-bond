import PropTypes from 'prop-types';
import { useRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Button, Typography } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/carousel' or it... Remove this comment to see the full error message
import Carousel, { CarouselDots, CarouselArrows } from 'src/components/carousel';
//
import PostItem from './PostItem';
import PostItemCarouse from './PostItemCarouse';

// ----------------------------------------------------------------------

export default function BlogTravelLandingLatestPosts({ posts }: any) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      width: 1,
      bottom: 80,
      position: 'absolute',
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
    <Box sx={{ bgcolor: 'grey.900' }}>
      {!isMdUp && (
        <Typography variant="h2" sx={{ pt: 10, pb: 8, color: 'common.white', textAlign: 'center' }}>
          Latest Posts
        </Typography>
      )}

      <Box
        gap={{ xs: 8, md: 0 }}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        <Box sx={{ overflow: 'hidden', position: 'relative' }}>
          <CarouselArrows
            onNext={handleNext}
            onPrev={handlePrev}
            leftButtonProps={{ sx: { color: 'common.white' } }}
            rightButtonProps={{ sx: { color: 'common.white' } }}
          >
            <Carousel ref={carouselRef} {...carouselSettings}>
              {posts.map((post: any) => (
                <PostItemCarouse key={post.id} post={post} />
              ))}
            </Carousel>
          </CarouselArrows>
        </Box>

        <Box
          sx={{
            px: { xs: 2.5, sm: 5, md: 8, lg: 15 },
          }}
        >
          {isMdUp && (
            <Typography variant="h2" sx={{ color: 'common.white', py: 10 }}>
              Latest Posts
            </Typography>
          )}

          <Stack spacing={3}>
            {posts.slice(0, 3).map((post: any) => (
              <PostItem key={post.id} post={post} />
            ))}
          </Stack>

          <Box
            sx={{
              mt: { xs: 8, md: 5 },
              mb: 10,
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Button
              component={NextLink}
              href={paths.travel.posts}
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              View All
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

BlogTravelLandingLatestPosts.propTypes = {
  posts: PropTypes.array,
};
