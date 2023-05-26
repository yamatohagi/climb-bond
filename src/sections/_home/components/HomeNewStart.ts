import { m } from 'framer-motion';
// @mui
import { Box, Paper, Container, Typography } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeNewStart() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={MotionViewport}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: { xs: 10, md: 15 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Paper
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pb: 10,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: 3,
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
          bgcolor: 'background.neutral',
        }}
      >
        // @ts-expect-error TS(2503): Cannot find namespace 'm'.
        <m.div variants={varFade().inUp}>
          <Image
            // @ts-expect-error TS(2304): Cannot find name 'alt'.
            alt="cover"
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            src="/assets/images/home/new_start.png"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ maxWidth: 720, mx: 'auto' }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </m.div>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Box sx={{ mt: 3, mx: 'auto', px: 3, maxWidth: 560 }}>
          // @ts-expect-error TS(2503): Cannot find namespace 'm'.
          <m.div variants={varFade().inDown}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              // @ts-expect-error TS(2304): Cannot find name 'start'.
              new start
            </Typography>
          </m.div>

          // @ts-expect-error TS(2304): Cannot find name 'variants'.
          <m.div variants={varFade().inDown}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h2" sx={{ my: 3 }}>
              // @ts-expect-error TS(2304): Cannot find name 'The'.
              The
              // @ts-expect-error TS(2304): Cannot find name 'component'.
              <Box component="span" sx={{ color: 'primary.main' }}>
                // @ts-expect-error TS(2349): This expression is not callable.
                {` ZONE `}
              </Box>
              // @ts-expect-error TS(2304): Cannot find name 'UI'.
              UI Kit
            </Typography>
          </m.div>

          // @ts-expect-error TS(2304): Cannot find name 'variants'.
          <m.div variants={varFade().inDown}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2304): Cannot find name 'Modern'.
              Modern ui kit to save your time, boost your creativity. Neat and super stylish layout
              // @ts-expect-error TS(1101): 'with' statements are not allowed in strict mode.
              ready to help with your projects
            </Typography>
          </m.div>
        </Box>
      </Paper>
    </Container>
  );
}
