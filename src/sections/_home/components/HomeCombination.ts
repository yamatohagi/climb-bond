import { m } from 'framer-motion';
// @mui
import { Button, Box, Container, Typography } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeCombination() {
  const isMdUp = useResponsive('up', 'md');

  const visitBtn = (
    // @ts-expect-error TS(2503): Cannot find namespace 'm'.
    <m.div variants={varFade().inLeft}>
      // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Button
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        size="large"
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color="inherit"
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="outlined"
        // @ts-expect-error TS(2304): Cannot find name 'target'.
        target="_blank"
        // @ts-expect-error TS(2304): Cannot find name 'rel'.
        rel="noopener"
        // @ts-expect-error TS(2304): Cannot find name 'href'.
        href={paths.minimalStore}
        // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
        endIcon={<Iconify icon="carbon:chevron-right" width={16} />}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ ...(isMdUp && { mt: 5 }) }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Visit'.
        Visit Minimal Dashboard
      </Button>
    </m.div>
  );

  return (
    <Container
      component={MotionViewport}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        position: 'relative',
        // @ts-expect-error TS(2304): Cannot find name 'pt'.
        pt: { xs: 5, md: 10 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 10, md: 15 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          borderRadius: 3,
          // @ts-expect-error TS(2304): Cannot find name 'p'.
          p: { xs: 2, md: 10 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          bgcolor: { xs: 'transparent', md: 'background.neutral' },
        }}
      >
        // @ts-expect-error TS(2503): Cannot find namespace 'm'.
        <m.div variants={varFade().inUp}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Perfect'.
            Perfect combination
          </Typography>
        </m.div>

        // @ts-expect-error TS(2304): Cannot find name 'variants'.
        <m.div variants={varFade().inUp}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h3" sx={{ my: 3 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Looking'.
            Looking For a <br />
            // @ts-expect-error TS(2304): Cannot find name 'Dashboard'.
            Dashboard Template?
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Typography>
        </m.div>

        // @ts-expect-error TS(2304): Cannot find name 'variants'.
        <m.div variants={varFade().inUp}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              color: 'text.secondary',
              // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
              maxWidth: 360,
              // @ts-expect-error TS(2304): Cannot find name 'mx'.
              mx: {
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                xs: 'auto',
                // @ts-expect-error TS(2304): Cannot find name 'md'.
                md: 'unset',
              },
            }}
          >
            // @ts-expect-error TS(2304): Cannot find name 'Minimal'.
            Minimal UI Kit is a professional dashboard used by many of our clients.
          </Typography>
        </m.div>

        // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
        {isMdUp && visitBtn}
      </Box>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          top: { md: -40 },
          right: { md: -120 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          my: { xs: 8, md: 0 },
          position: { md: 'absolute' },
        }}
      >
        // @ts-expect-error TS(2503): Cannot find namespace 'm'.
        <m.div variants={varFade().inDown}>
          <Image
            // @ts-expect-error TS(2304): Cannot find name 'alt'.
            alt="minimal dashboard"
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            src="/assets/images/home/minimal_dashboard.png"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              maxWidth: { md: 790 },
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </m.div>
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
      {!isMdUp && visitBtn}
    </Container>
  );
}
