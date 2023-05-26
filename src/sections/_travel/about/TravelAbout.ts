// @mui
import { Container, Typography, Box, Stack, Unstable_Grid2 as Grid } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fShortenNumber } from 'src/utils/formatNumber';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/count-up' or it... Remove this comment to see the full error message
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => _mock.image.travel(index + 2));

const SUMMARY = [
  { name: 'Air tickets sold', number: 130 },
  { name: 'Tours booked', number: 196 },
  { name: 'Site visitors', number: 10679 },
  { name: 'Verified hotels', number: 877 },
];

// ----------------------------------------------------------------------

export default function TravelAbout() {
  const isSmUp = useResponsive('up', 'sm');

  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: 5,
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
          maxWidth: 560,
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'pb'.
          pb: { xs: 5, md: 10 },
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h1">About Us</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Typography sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Master'.
          Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook
          // @ts-expect-error TS(2304): Cannot find name 'Marketing'.
          Marketing, Analytics & More!
        </Typography>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'container'.
      <Grid container spacing={3}>
        // @ts-expect-error TS(2349): This expression is not callable.
        {(isSmUp ? IMAGES : IMAGES.slice(0, 1)).map((img: any, index: any) => (
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
            // @ts-expect-error TS(2304): Cannot find name 'alt'.
            <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2 }} />
          </Grid>
        ))}
      </Grid>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          rowGap: 5,
          // @ts-expect-error TS(2304): Cannot find name 'columnGap'.
          columnGap: 3,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(4, 1fr)',
          },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pt: { xs: 5, md: 10 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pb: 10,
        }}
      >
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {SUMMARY.map((value: any) => <div key={value.name}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2" gutterBottom>
            <CountUp
              // @ts-expect-error TS(2304): Cannot find name 'start'.
              start={value.number / 5}
              // @ts-expect-error TS(2304): Cannot find name 'end'.
              end={value.number}
              // @ts-expect-error TS(2304): Cannot find name 'formattingFn'.
              formattingFn={(newValue) => fShortenNumber(newValue)}
            />

            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              variant="h4"
              // @ts-expect-error TS(2304): Cannot find name 'component'.
              component="span"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            >
              +
            </Typography>
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {value.name}
          </Typography>
        </div>)}
      </Box>

      <Grid
        // @ts-expect-error TS(2304): Cannot find name 'container'.
        container
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={{ xs: 5, md: 3 }}
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="space-between"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={6} lg={5}>
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              mb: 2,
              // @ts-expect-error TS(2304): Cannot find name 'width'.
              width: 24,
              // @ts-expect-error TS(2304): Cannot find name 'height'.
              height: 3,
              // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
              borderRadius: 3,
              // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
              bgcolor: 'primary.main',
              // @ts-expect-error TS(2304): Cannot find name 'mx'.
              mx: { xs: 'auto', md: 0 },
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
          />
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h3">
            // @ts-expect-error TS(2304): Cannot find name 'Maecenas'.
            Maecenas malesuada. Cras ultricies mi eu turpis hendrerit fringilla Nunc egestas
          </Typography>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={6} lg={6}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h4" paragraph>
            // @ts-expect-error TS(2304): Cannot find name 'Fusce'.
            Fusce convallis metus id felis luctus
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Fusce'.
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
            // @ts-expect-error TS(2304): Cannot find name 'Vestibulum'.
            Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
            // @ts-expect-error TS(2304): Cannot find name 'br'.
            <br />
            // @ts-expect-error TS(2304): Cannot find name 'br'.
            <br />
            // @ts-expect-error TS(2304): Cannot find name 'Donec'.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Maecenas nec odio et
            // @ts-expect-error TS(2304): Cannot find name 'ante'.
            ante tincidunt tempus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            // @ts-expect-error TS(2304): Cannot find name 'nisi'.
            nisi. Vestibulum eu odio. Curabitur ullamcorper ultricies nisi.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
