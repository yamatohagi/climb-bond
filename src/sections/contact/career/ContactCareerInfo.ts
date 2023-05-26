// @mui
import { Typography, Stack, Container, Link, IconButton } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ContactCareerInfo() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: 5,
        // @ts-expect-error TS(2304): Cannot find name 'pb'.
        pb: { xs: 5, md: 10 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h2">Get In Touch</Typography>

      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="subtitle1"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mt: 2,
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: { xs: 3, md: 5 },
        }}
      // @ts-expect-error TS(2349): This expression is not callable.
      >{`We'd love to talk about how we can help you.`}</Typography>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={{ xs: 3, md: 5 }} direction={{ xs: 'column', md: 'row' }}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={1}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="subtitle2">Email</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Link variant="body2" color="inherit" href="mailto:hello@example.com">
            // @ts-expect-error TS(2304): Cannot find name 'hello'.
            hello@example.com
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Link>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="subtitle2">Phone</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2">(907) 555-0101</Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="subtitle2">Address</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2">3891 Ranchview Dr. Richardson, California 62639</Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="subtitle2">Follow Us</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row">
            // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
            {_socials.map((social: any) => <IconButton key={social.value} color="inherit">
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              <Iconify icon={social.icon} />
            </IconButton>)}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
