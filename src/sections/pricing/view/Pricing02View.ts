// @mui
import { Stack, Tooltip, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _pricing02 } from 'src/_mock';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import { PlanHeader, PlanContentMobile, PlanContentDesktop } from '../pricing-02';

// ----------------------------------------------------------------------

export default function Pricing02View() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        minHeight: 1,
        // @ts-expect-error TS(2304): Cannot find name 'pt'.
        pt: { xs: 13, md: 16 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h3" align="center" paragraph>
        // @ts-expect-error TS(2304): Cannot find name 'Flexible'.
        Flexible plans for your
        // @ts-expect-error TS(2304): Cannot find name 'br'.
        <br /> community&apos;s size and needs
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'align'.
      <Typography align="center" sx={{ mb: { xs: 5, md: 8 }, color: 'text.secondary' }}>
        // @ts-expect-error TS(2304): Cannot find name 'Choose'.
        Choose your plan and make modern online conversation magic
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'container'.
      <Grid container alignItems="flex-end">
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {isMdUp && (
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={3} sx={{ pb: 5 }}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              // @ts-expect-error TS(2304): Cannot find name 'Feature'.
              Feature
            </Typography>
          </Grid>
        )}

        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        {_pricing02.map((plan: any) => <Grid
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={plan.license}
          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          xs={12}
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md={3}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            mb: { xs: 4, md: 0 },
            borderRadius: { xs: 2, md: 0 },
            boxShadow: (theme: any) => ({
              xs: theme.customShadows.z16,
              md: 0
            }),
          }}
        >
          // @ts-expect-error TS(2709): Cannot use namespace 'PlanHeader' as a type.
          <PlanHeader plan={plan} />
          // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
          {!isMdUp && <PlanContentMobile plan={plan} />}
        </Grid>)}
      </Grid>

      // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
      {isMdUp && (
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container>
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid
            // @ts-expect-error TS(2304): Cannot find name 'xs'.
            xs={12}
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md={3}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              borderTop: (theme: any) => `solid 1px ${theme.palette.divider}`,
            }}
          >
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            {_pricing02[0].options.map((option: any) => <Stack
              // @ts-expect-error TS(2304): Cannot find name 'key'.
              key={option.title}
              // @ts-expect-error TS(2304): Cannot find name 'direction'.
              direction="row"
              // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
              alignItems="center"
              // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
              justifyContent="space-between"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                height: 72,
                borderBottom: (theme: any) => `solid 1px ${theme.palette.divider}`,
              }}
            >
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="subtitle2">{option.title}</Typography>

              // @ts-expect-error TS(2304): Cannot find name 'title'.
              <Tooltip title={option.tootip} placement="right" arrow>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div>
                  // @ts-expect-error TS(2304): Cannot find name 'icon'.
                  <Iconify icon="carbon:information" sx={{ color: 'text.secondary' }} />
                </div>
              </Tooltip>
            </Stack>)}
          </Grid>

          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          {_pricing02.map((plan: any) => <Grid
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={plan.license}
            // @ts-expect-error TS(2304): Cannot find name 'xs'.
            xs={12}
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md={3}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              borderTop: (theme: any) => ({
                md: `solid 1px ${theme.palette.divider}`
              }),
            }}
          >
            // @ts-expect-error TS(2709): Cannot use namespace 'PlanContentDesktop' as a typ... Remove this comment to see the full error message
            <PlanContentDesktop plan={plan} />
          </Grid>)}
        </Grid>
      )}
    </Container>
  );
}
