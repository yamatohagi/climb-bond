import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/images/home/for_designer.jpg',
  }),
  textAlign: 'center',
  color: theme.palette.common.white,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeForDesigner() {
  return (
    <MotionViewport>
      // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
      <StyledRoot>
        // @ts-expect-error TS(2300): Duplicate identifier '(Missing)'.
        <m.div variants={varFade({ distance: 40 }).inUp}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Professional'.
            Professional Kit
          </Typography>
        </m.div>

        // @ts-expect-error TS(2300): Duplicate identifier '(Missing)'.
        <m.div variants={varFade({ distance: 40 }).inUp}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
            // @ts-expect-error TS(2304): Cannot find name 'For'.
            For Designer
          </Typography>
        </m.div>

        // @ts-expect-error TS(2300): Duplicate identifier '(Missing)'.
        <m.div variants={varFade({ distance: 40 }).inUp}>
          // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Button
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="large"
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="contained"
            // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
            endIcon={<Iconify icon="carbon:launch" />}
            // @ts-expect-error TS(2304): Cannot find name 'target'.
            target="_blank"
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="noopener"
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href={paths.figmaPreview}
          >
            // @ts-expect-error TS(2304): Cannot find name 'figma'.
            figma workspace
          </Button>
        </m.div>
      </StyledRoot>
    </MotionViewport>
  );
}
