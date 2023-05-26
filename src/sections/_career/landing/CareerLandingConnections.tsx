import PropTypes from 'prop-types';
import { useRef } from 'react';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Link,
  Stack,
  Button,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useBoundingClientRec... Remove this comment to see the full error message
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';
// @ts-expect-error TS(2307): Cannot find module 'src/components/carousel' or it... Remove this comment to see the full error message
import Carousel, { CarouselArrows } from 'src/components/carousel';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function CareerLandingConnections({
  countries
}: any) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef(null);

  const containerRef = useRef(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const carouselSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 8, md: 15 },
      }}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Container
        sx={{
          mb: { md: 0 },
          left: { md: 0 },
          right: { md: 0 },
          position: { md: 'absolute' },
          height: { md: 'calc(100% - 320px)' },
        }}
      >
        {isMdUp && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <SvgColor
            src="/assets/illustrations/illustration_map.svg"
            sx={{
              top: -40,
              left: -64,
              width: 780,
              height: 646,
              opacity: 0.64,
              position: 'absolute',
              color: 'text.disabled',
            }}
          />
        )}

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid container spacing={3} justifyContent="space-between">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Grid xs={12} md={4}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Stack
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                pt: { md: 8 },
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Typography variant="h2">Global Connections</Typography>

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla neque dolor,
                sagittis eget, iaculis quis.
              </Typography>

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Button
                component={NextLink}
                href={paths.career.jobs}
                color="inherit"
                size="large"
                variant="contained"
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                endIcon={<Iconify icon="carbon:chevron-right" />}
              >
                View All Jobs
              </Button>
            </Stack>
          </Grid>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Grid xs={12} md={7}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box
        sx={{
          pl: `${offsetLeft}px`,
          width: { md: `calc(100% + 120px)` },
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Carousel ref={carouselRef} {...carouselSettings}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {countries.map((country: any) => <Box
            key={country.id}
            sx={{
              ml: '-1px',
              py: 8,
              pr: { xs: 2, md: 4 },
              pl: { xs: 2, md: 0 },
              color: 'common.white',
            }}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <JobByCountryItem key={country.id} country={country} />
          </Box>)}
        </Carousel>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CarouselArrows
          spacing={2}
          justifyContent="center"
          onNext={handleNext}
          onPrev={handlePrev}
          sx={{ width: 1 }}
        />
      </Box>
    </Box>
  );
}

CareerLandingConnections.propTypes = {
  countries: PropTypes.array,
};

// ----------------------------------------------------------------------

function JobByCountryItem({
  country
}: any) {
  const { location, coverImg, totalJobs } = country;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link component={NextLink} href={paths.career.jobs} underline="none">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card
        component={m.div}
        whileHover="hover"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            // @ts-expect-error TS(2339): Property 'customShadows' does not exist on type 'T... Remove this comment to see the full error message
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{ overflow: 'hidden' }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <m.div variants={varHover(1.1)} transition={varTranHover()}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Image src={coverImg} alt="cover" ratio="3/4" />
          </m.div>
        </Box>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Stack spacing={1} sx={{ textAlign: 'center', p: 2.5 }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant="h6">{location}</Typography>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            {totalJobs} Jobs
          </Typography>
        </Stack>
      </Card>
    </Link>
  );
}

JobByCountryItem.propTypes = {
  country: PropTypes.shape({
    coverImg: PropTypes.string,
    location: PropTypes.string,
    totalJobs: PropTypes.number,
  }),
};
