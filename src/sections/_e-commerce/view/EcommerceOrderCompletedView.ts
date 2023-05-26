import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { Box, Button, Typography, Stack, Container } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { MotionContainer, varBounce } from 'src/components/animate';
//
import { EcommerceHeader } from '../layout';

// ----------------------------------------------------------------------

export default function EcommerceOrderCompletedView() {
  return (
    <>
      // @ts-expect-error TS(2749): 'EcommerceHeader' refers to a value, but is being ... Remove this comment to see the full error message
      <EcommerceHeader />

      <Container
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component={MotionContainer}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'pt'.
          pt: { xs: 5, md: 10 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pb: { xs: 10, md: 20 },
        }}
      >
        // @ts-expect-error TS(2503): Cannot find namespace 'm'.
        <m.div variants={varBounce().in}>
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box sx={{ fontSize: 128 }}>🎉</Box>
        </m.div>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1} sx={{ my: 5 }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h3">Your order is complete!</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(1101): 'with' statements are not allowed in strict mode.
            You will be receiving a confirmation email with order details.
          </Typography>
        </Stack>

        <Button
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          component={NextLink}
          // @ts-expect-error TS(2304): Cannot find name 'href'.
          href={paths.eCommerce.products}
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="large"
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="inherit"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="contained"
          // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
          startIcon={<Iconify icon="carbon:chevron-left" />}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Continue'.
          Continue Shopping
        </Button>
      </Container>
    </>
  );
}
