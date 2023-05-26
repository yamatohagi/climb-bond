// @mui
import { styled, alpha } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    imgUrl: '/assets/images/home/advertisement.jpg',
    color: alpha(theme.palette.grey[900], 0.8),
  }),
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(35, 0),
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  zIndex: 9,
  display: 'flex',
  textAlign: 'center',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2.5),
  color: theme.palette.common.white,
}));

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  return (
    // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <StyledRoot>
      // @ts-expect-error TS(2749): 'StyledContent' refers to a value, but is being us... Remove this comment to see the full error message
      <StyledContent>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h1" component="h2" sx={{ opacity: 0.48 }}>
          // @ts-expect-error TS(2304): Cannot find name 'Start'.
          Start Now
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="h1" component="h2" sx={{ mb: 8 }}>
          // @ts-expect-error TS(2304): Cannot find name 'Create'.
          Create Your
          // @ts-expect-error TS(2304): Cannot find name 'br'.
          <br /> Website Today
        </Typography>

        <Button
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="large"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="contained"
          // @ts-expect-error TS(2304): Cannot find name 'target'.
          target="_blank"
          // @ts-expect-error TS(2304): Cannot find name 'rel'.
          rel="noopener"
          // @ts-expect-error TS(2304): Cannot find name 'href'.
          href={paths.zoneStore}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Purchase'.
          Purchase Now
        </Button>
      </StyledContent>
    </StyledRoot>
  );
}
