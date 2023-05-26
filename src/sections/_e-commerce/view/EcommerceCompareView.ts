// @mui
import { Stack, Switch, Container, Typography, FormControlLabel } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _productsCompare } from 'src/_mock';
//
import { EcommerceHeader } from '../layout';
import { EcommerceCompareList } from '../compare';

// ----------------------------------------------------------------------

export default function EcommerceCompareView() {
  return (
    <>
      // @ts-expect-error TS(2749): 'EcommerceHeader' refers to a value, but is being ... Remove this comment to see the full error message
      <EcommerceHeader />

      <Container
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          overflow: 'hidden',
          // @ts-expect-error TS(2304): Cannot find name 'pt'.
          pt: 5,
          // @ts-expect-error TS(2304): Cannot find name 'pb'.
          pb: { xs: 5, md: 10 },
        }}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={2} alignItems="flex-start" sx={{ mb: 5 }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h3">Compare</Typography>

          <FormControlLabel
            // @ts-expect-error TS(2304): Cannot find name 'control'.
            control={<Switch color="success" defaultChecked />}
            // @ts-expect-error TS(2304): Cannot find name 'label'.
            label="Only view the difference"
          />
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'products'.
        <EcommerceCompareList products={_productsCompare} />
      </Container>
    </>
  );
}
