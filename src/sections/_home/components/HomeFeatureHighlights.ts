import { m } from 'framer-motion';
// @mui
import { Container, Typography, Box, Unstable_Grid2 as Grid } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const FEATURE_HIGHLIGHTS = [
  { title: '5 Prebuilt Websites', icon: 'carbon:application-web' },
  { title: '60+ Demo Page', icon: 'carbon:stacked-scrolling-2' },
  { title: 'Easy to Customize', icon: 'carbon:settings-adjust' },
  { title: 'Color Presets', icon: 'carbon:color-switch' },
  { title: 'Dark Mode', icon: 'carbon:asleep' },
  { title: 'Awesome Animation', icon: 'carbon:boolean' },
  { title: 'Google Fonts', icon: 'carbon:text-font' },
  { title: 'Figma Design', icon: 'ph:figma-logo' },
  { title: 'Fully Responsive', icon: 'carbon:devices' },
  { title: 'Mega Menu', icon: 'carbon:list-dropdown' },
  { title: 'Clean Markup', icon: 'carbon:script' },
  { title: 'Free Updates', icon: 'carbon:update-now' },
  { title: 'Fast Support', icon: 'carbon:headset' },
  { title: 'Well Documented', icon: 'carbon:notebook' },
];

// ----------------------------------------------------------------------

export default function HomeFeatureHighlights() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={MotionViewport}
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
      <Grid container spacing={{ xs: 8, md: 3 }} justifyContent={{ md: 'space-between' }}>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid
          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          xs={12}
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md={4}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          // @ts-expect-error TS(2503): Cannot find namespace 'm'.
          <m.div variants={varFade().inUp}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              // @ts-expect-error TS(2304): Cannot find name 'Feature'.
              Feature Highlights
            </Typography>
          </m.div>

          // @ts-expect-error TS(2304): Cannot find name 'variants'.
          <m.div variants={varFade().inUp}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h2" sx={{ my: 3 }}>
              // @ts-expect-error TS(2304): Cannot find name 'Have'.
              Have Everything You Need
            </Typography>
          </m.div>

          // @ts-expect-error TS(2304): Cannot find name 'variants'.
          <m.div variants={varFade().inUp}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2349): This expression is not callable.
              {`Let's see what makes our theme super powerful and user-friendly!`}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            </Typography>
          </m.div>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={7}>
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              rowGap: 6,
              // @ts-expect-error TS(2304): Cannot find name 'columnGap'.
              columnGap: 3,
              // @ts-expect-error TS(2304): Cannot find name 'display'.
              display: 'grid',
              // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
              gridTemplateColumns: {
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                xs: 'repeat(2, 1fr)',
                // @ts-expect-error TS(2304): Cannot find name 'sm'.
                sm: 'repeat(3, 1fr)',
              },
            }}
          >
            // @ts-expect-error TS(2300): Duplicate identifier '(Missing)'.
            {FEATURE_HIGHLIGHTS.map((feature: any) => <m.div key={feature.title} variants={varFade({ distance: 40 }).in}>
              // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
              <Box sx={{ textAlign: 'center' }}>
                // @ts-expect-error TS(2304): Cannot find name 'icon'.
                <Iconify icon={feature.icon} width={32} />

                // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
                <Typography variant="subtitle2" component="div" sx={{ mt: 2 }}>
                  // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                  {feature.title}
                </Typography>
              </Box>
            </m.div>)}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
