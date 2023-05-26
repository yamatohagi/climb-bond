// @mui
import { Box, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
//
import { PaymentSummary, PaymentMethods, PaymentBillingAddress } from '../components';

// ----------------------------------------------------------------------

export default function PaymentView() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'minHeight'.
        minHeight: 1,
        // @ts-expect-error TS(2304): Cannot find name 'pt'.
        pt: { xs: 13, md: 16 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h3" align="center" paragraph>
        // @ts-expect-error TS(2349): This expression is not callable.
        {`Let's Finish Powering You Up!`}
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'align'.
      <Typography align="center" sx={{ color: 'text.secondary', mb: { xs: 5, md: 8 } }}>
        // @ts-expect-error TS(2304): Cannot find name 'Professional'.
        Professional plan is right for you.
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'container'.
      <Grid container spacing={isMdUp ? 3 : 5}>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={8}>
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box
            // @ts-expect-error TS(2304): Cannot find name 'gap'.
            gap={5}
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display="grid"
            // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
            gridTemplateColumns={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              xs: 'repeat(1, 1fr)',
              // @ts-expect-error TS(2304): Cannot find name 'md'.
              md: 'repeat(2, 1fr)',
            }}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              p: { md: 5 },
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              borderRadius: 2,
              // @ts-expect-error TS(2304): Cannot find name 'border'.
              border: (theme: any) => ({
                md: `dashed 1px ${theme.palette.divider}`
              }),
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          >
            // @ts-expect-error TS(2749): 'PaymentBillingAddress' refers to a value, but is ... Remove this comment to see the full error message
            <PaymentBillingAddress />

            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            <PaymentMethods />
          </Box>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={4}>
          // @ts-expect-error TS(2709): Cannot use namespace 'PaymentSummary' as a type.
          <PaymentSummary />
        </Grid>
      </Grid>
    </Container>
  );
}
