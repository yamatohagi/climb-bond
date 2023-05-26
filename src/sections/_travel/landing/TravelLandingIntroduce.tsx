import { useRef } from 'react';
// @mui
import { Typography, Container, Stack, Box, Card } from '@mui/material';
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

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: 'Professional Tour Guides',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/ic_popularity.svg',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/ic_reputation.svg',
  },
  {
    title: 'Secure Payment',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/ic_secure_payment.svg',
  },
];

// ----------------------------------------------------------------------

export default function TravelLandingIntroduce() {
  const isMdUp = useResponsive('up', 'md');

  const containerRef = useRef(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container && container.left + 20;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Container ref={containerRef}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant="h2">Explore A Different Way To Travel</Typography>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography sx={{ color: 'text.secondary' }}>
            Cras ultricies mi eu turpis hendrerit fringilla. Nulla consequat massa quis enim.
          </Typography>
        </Stack>
      </Container>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box
        sx={{
          position: 'relative',
          my: { xs: 8, md: 10 },
          ml: { md: `${offsetLeft}px` },
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card
          sx={{
            p: 5,
            top: 0,
            left: 0,
            zIndex: 9,
            m: { xs: 2, md: 5 },
            position: 'absolute',
            maxWidth: { sm: 360 },
            right: { xs: 0, sm: 'unset' },
            bottom: { xs: 0, sm: 'unset' },
            textAlign: { xs: 'center', sm: 'unset' },
            display: 'flex',
            alignItems: { xs: 'center', sm: 'unset' },
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Device
          </Typography>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant="h4" sx={{ my: 3 }}>
            The More Important the Work
          </Typography>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: 'center', sm: 'unset' }}
            sx={{
              cursor: 'pointer',
              color: 'primary.main',
              typography: 'subtitle1',
              '&:hover': { opacity: 0.72 },
            }}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Iconify icon="carbon:play" width={24} sx={{ mr: 1 }} /> Watch Video
          </Stack>
        </Card>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Image
          alt="cover"
          src="/assets/images/travel/travel_post_hero.jpg"
          width={1600}
          height={isMdUp ? 900 : 1600}
          ratio={isMdUp ? '16/9' : '1/1'}
        />
      </Box>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Container sx={{ textAlign: 'center' }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 8, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {SUMMARY.map((value) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Stack key={value.title} spacing={2}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <SvgColor
                src={value.icon}
                sx={{ mb: 3, width: 64, height: 64, mx: 'auto', color: 'primary.main' }}
              />

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Typography variant="h5">{value.title}</Typography>

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.description}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
