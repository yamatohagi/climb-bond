// @mui
import { Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
//
import ContactMarketingInfo from './ContactMarketingInfo';
import ContactMarketingForm from './ContactMarketingForm';

// ----------------------------------------------------------------------

export default function ContactMarketing() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'pt'.
        pt: { xs: 5, md: 10 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid
        // @ts-expect-error TS(2552): Cannot find name 'container'. Did you mean 'Contai... Remove this comment to see the full error message
        container
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={{ xs: 5, md: 3 }}
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="space-between"
        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        direction={{ xs: 'column-reverse', md: 'row' }}
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={6} lg={5}>
          // @ts-expect-error TS(2749): 'ContactMarketingInfo' refers to a value, but is b... Remove this comment to see the full error message
          <ContactMarketingInfo />
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={6} lg={6}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h3" sx={{ mb: 5 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Ready'.
            Ready To Get Started?
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Typography>

          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          <ContactMarketingForm />
        </Grid>
      </Grid>
    </Container>
  );
}
