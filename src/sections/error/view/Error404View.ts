import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { Button, Typography } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { MotionContainer, varBounce } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function Error404View() {
  return (
    <MotionContainer>
      // @ts-expect-error TS(2503): Cannot find namespace 'm'.
      <m.div variants={varBounce().in}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h3" paragraph>
          // @ts-expect-error TS(2304): Cannot find name 'Page'.
          Page Not Found!
        </Typography>
      </m.div>

      // @ts-expect-error TS(2304): Cannot find name 'variants'.
      <m.div variants={varBounce().in}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Sorry'.
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
          // @ts-expect-error TS(2304): Cannot find name 'sure'.
          sure to check your spelling.
        </Typography>
      </m.div>

      // @ts-expect-error TS(2304): Cannot find name 'variants'.
      <m.div variants={varBounce().in}>
        <Image
          // @ts-expect-error TS(2304): Cannot find name 'alt'.
          alt="404"
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          src="/assets/illustrations/illustration_404.svg"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            mx: 'auto',
            // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
            maxWidth: 320,
            // @ts-expect-error TS(2304): Cannot find name 'my'.
            my: { xs: 5, sm: 8 },
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </m.div>

      // @ts-expect-error TS(2304): Cannot find name 'component'.
      <Button component={NextLink} href="/" size="large" color="inherit" variant="contained">
        // @ts-expect-error TS(2304): Cannot find name 'Go'.
        Go to Home
      </Button>
    </MotionContainer>
  );
}
