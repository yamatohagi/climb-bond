// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Link,
  Stack,
  Button,
  Container,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0),
    imgUrl: '/assets/images/marketing/marketing_get_free_seo.jpg',
  }),
  padding: theme.spacing(10, 0),
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// @ts-expect-error TS(2769): No overload matches this call.
const StyledInput = styled((props: any) => <TextField fullWidth {...props} />)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: theme.palette.common.white,
  },
  '& .MuiInputLabel-root,& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.grey[500],
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingFreeSEO() {
  return (
    // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <StyledRoot>
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid
          // @ts-expect-error TS(2552): Cannot find name 'container'. Did you mean 'Contai... Remove this comment to see the full error message
          container
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 5,
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 3,
          }}
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent="space-between"
        >
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={5}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              variant="h1"
              // @ts-expect-error TS(2304): Cannot find name 'component'.
              component="h2"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                color: 'primary.main',
                // @ts-expect-error TS(2304): Cannot find name 'mb'.
                mb: { xs: 3, md: 8 },
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              // @ts-expect-error TS(2304): Cannot find name 'Get'.
              Get Free
              // @ts-expect-error TS(2304): Cannot find name 'br'.
              <br /> SEO Analysis
            </Typography>

            <Stack
              // @ts-expect-error TS(2304): Cannot find name 'direction'.
              direction="row"
              // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
              alignItems="center"
              // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ color: 'common.white', mb: 2 }}
            >
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              <Iconify icon="carbon:email" width={24} sx={{ mr: 2 }} />

              // @ts-expect-error TS(2304): Cannot find name 'color'.
              <Link color="inherit" href="mailto:hello@example.com">
                // @ts-expect-error TS(2304): Cannot find name 'hello'.
                hello@example.com
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
              </Link>
            </Stack>

            <Stack
              // @ts-expect-error TS(2304): Cannot find name 'direction'.
              direction="row"
              // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
              alignItems="center"
              // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ color: 'common.white' }}
            >
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              <Iconify icon="carbon:location" width={24} sx={{ mr: 2 }} />
              // @ts-expect-error TS(2304): Cannot find name 'Bridle'.
              508 Bridle Avenue Newnan, GA 30263
            </Stack>
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          <Grid xs={12} md={5}>
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
              // @ts-expect-error TS(2749): 'StyledInput' refers to a value, but is being used... Remove this comment to see the full error message
              <StyledInput variant="filled" label="Name" sx={{ mb: 2.5 }} />

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <StyledInput variant="filled" label="Email" sx={{ mb: 2.5 }} />

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <StyledInput variant="filled" label="Phone" sx={{ mb: 2.5 }} />

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <StyledInput variant="filled" label="Website URL" sx={{ mb: 5 }} />

              // @ts-expect-error TS(2304): Cannot find name 'size'.
              <Button size="large" variant="contained">
                // @ts-expect-error TS(2304): Cannot find name 'Send'.
                Send Request
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
