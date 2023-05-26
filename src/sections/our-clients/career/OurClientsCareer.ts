// @mui
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Typography, Stack, Container, Paper, Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/carousel' or it... Remove this comment to see the full error message
import Carousel from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function OurClientsCareer({
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
        pt: { xs: 10, md: 15 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
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
          mx: 'auto',
          // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
          maxWidth: 480,
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: { xs: 8, md: 10 },
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h2">Our Clients</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Typography sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Curabitur'.
          Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam vitae
          // @ts-expect-error TS(2304): Cannot find name 'tortor'.
          tortor.
        </Typography>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'carouselSettings'.
      <Carousel {...carouselSettings}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {brands.map((brand: any) => <Box key={brand.id} sx={{ px: 1.5 }}>
          // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Paper
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="outlined"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              py: 3,
              // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
              borderRadius: 2,
              // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
              bgcolor: 'background.default',
            }}
          >
            <Image
              // @ts-expect-error TS(2304): Cannot find name 'alt'.
              alt={brand.name}
              // @ts-expect-error TS(2304): Cannot find name 'src'.
              src={brand.image}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                width: 106,
                // @ts-expect-error TS(2304): Cannot find name 'height'.
                height: 32,
                // @ts-expect-error TS(2304): Cannot find name 'mx'.
                mx: 'auto',
              }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            />
          </Paper>
        </Box>)}
      </Carousel>
    </Container>
  );
}

OurClientsCareer.propTypes = {
  brands: PropTypes.array,
};
