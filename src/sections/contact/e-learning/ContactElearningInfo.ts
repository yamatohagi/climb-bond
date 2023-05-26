// @mui
import {
  Typography,
  Stack,
  Container,
  Link,
  Divider,
  IconButton,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials, _offices } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
// @ts-expect-error TS(6142): Module '../map' was resolved to '/Users/yamatohagi... Remove this comment to see the full error message
import ContactMap from '../map';

// ----------------------------------------------------------------------

export default function ContactElearningInfo() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: { xs: 5, md: 5 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={6} lg={4}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="h2"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              mb: 5,
              // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            // @ts-expect-error TS(2304): Cannot find name 'Get'.
            Get In Touch
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack spacing={1}>
              // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                // @ts-expect-error TS(2304): Cannot find name 'icon'.
                <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> Email
              </Stack>

              // @ts-expect-error TS(2304): Cannot find name 'color'.
              <Link color="inherit" variant="body2" href="mailto:hello@example.com">
                // @ts-expect-error TS(2304): Cannot find name 'hello'.
                hello@example.com
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
              </Link>
            </Stack>

            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            <Stack spacing={1}>
              // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                // @ts-expect-error TS(2304): Cannot find name 'icon'.
                <Iconify icon="carbon:mobile" width={24} sx={{ mr: 1 }} /> Phone
              </Stack>

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="body2">(907) 555-0101</Typography>
            </Stack>

            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            <Stack spacing={1}>
              // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                // @ts-expect-error TS(2304): Cannot find name 'icon'.
                <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Address
              </Stack>

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="body2">
                // @ts-expect-error TS(2304): Cannot find name 'Ranchview'.
                3891 Ranchview Dr. Richardson, California 62639
              </Typography>
            </Stack>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Divider sx={{ borderStyle: 'dashed', width: 1 }} />

            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="overline">Follow Us</Typography>
              // @ts-expect-error TS(2304): Cannot find name 'direction'.
              <Stack direction="row">
                // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
                {_socials.map((social: any) => <IconButton key={social.value} color="inherit">
                  // @ts-expect-error TS(2304): Cannot find name 'icon'.
                  <Iconify icon={social.icon} />
                </IconButton>)}
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={6} lg={7}>
          // @ts-expect-error TS(2709): Cannot use namespace 'ContactMap' as a type.
          <ContactMap offices={_offices} sx={{ borderRadius: 2 }} />
        </Grid>
      </Grid>
    </Container>
  );
}
