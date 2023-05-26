// @mui
import { Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function CareerAboutOurVision() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid
        // @ts-expect-error TS(2552): Cannot find name 'container'. Did you mean 'Contai... Remove this comment to see the full error message
        container
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          xs: 8,
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md: 3,
        }}
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="space-between"
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={3}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h3" sx={{ pt: { md: 5 } }}>
            // @ts-expect-error TS(2304): Cannot find name 'Fusce'.
            Fusce convallis metus id felis luctus
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary', mt: 3 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Fusce'.
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
            // @ts-expect-error TS(2304): Cannot find name 'Vestibulum'.
            Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
          </Typography>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
        {isMdUp && (
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={4}>
            <Image
              // @ts-expect-error TS(2304): Cannot find name 'alt'.
              alt="about introduce"
              // @ts-expect-error TS(2304): Cannot find name 'src'.
              src="/assets/images/career/career_3.jpg"
              // @ts-expect-error TS(2304): Cannot find name 'ratio'.
              ratio="3/4"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        )}

        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={3}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h3" sx={{ pt: { md: 5 } }}>
            // @ts-expect-error TS(2304): Cannot find name 'Fusce'.
            Fusce convallis metus id felis luctus
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary', mt: 3 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Fusce'.
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
            // @ts-expect-error TS(2304): Cannot find name 'Vestibulum'.
            Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
