import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Box, Container, Typography, Stack, Unstable_Grid2 as Grid } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useBoundingClientRec... Remove this comment to see the full error message
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/carousel' or it... Remove this comment to see the full error message
import Carousel, { CarouselArrows, CarouselDots } from 'src/components/carousel';
//
import TeamMember from './TeamMember';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(10, 0),
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    padding: theme.spacing(20, 0),
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    marginBottom: 0,
    position: 'absolute',
    height: 'calc(100% - 320px)',
  },
}));

// ----------------------------------------------------------------------

export default function TeamMarketing({ members }: any) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef(null);

  const containerRef = useRef(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        mt: 8,
        display: { md: 'none' },
      },
    }),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
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
    <StyledRoot>
      <StyledContainer>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={4}>
            <Stack spacing={3} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
              <Typography variant="overline" sx={{ color: 'grey.600' }}>
                Team
              </Typography>

              <Typography variant="h2" sx={{ color: 'primary.main' }}>
                Meet Our Team
              </Typography>

              <Typography sx={{ color: 'common.white' }}>
                Since wire-frame renderings are relatively simple and fast to calculate, they are
                often used in cases
              </Typography>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>

        {isMdUp && (
          <CarouselArrows
            spacing={2}
            onNext={handleNext}
            onPrev={handlePrev}
            leftButtonProps={{ color: 'primary', sx: { color: 'primary.main', opacity: 1 } }}
            rightButtonProps={{ color: 'primary', sx: { color: 'primary.main', opacity: 1 } }}
            sx={{ position: 'absolute', bottom: 0 }}
          />
        )}
      </StyledContainer>

      <Box
        sx={{
          pl: `${offsetLeft}px`,
          width: { md: `calc(100% + 120px)` },
        }}
      >
        <Carousel ref={carouselRef} {...carouselSettings}>
          {members.map((member: any) => (
            <Box
              key={member.id}
              sx={{
                ml: '-1px',
                pl: { xs: 2, md: 4 },
                pr: { xs: 2, md: 0 },
                color: 'common.white',
              }}
            >
              <TeamMember member={member} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </StyledRoot>
  );
}

TeamMarketing.propTypes = {
  members: PropTypes.array,
};
