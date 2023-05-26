import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box, Typography, Stack, Paper, Container, Link } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _offices } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function ContactTravelInfo() {
  return <>
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: 5,
        // @ts-expect-error TS(2304): Cannot find name 'pb'.
        pb: 10,
        // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h2">
        // @ts-expect-error TS(2304): Cannot find name 'We'.
        We Work <br />
        // @ts-expect-error TS(2304): Cannot find name 'Worldwide'.
        Worldwide.
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Typography sx={{ color: 'text.secondary', mt: 3 }}>
        // @ts-expect-error TS(2349): This expression is not callable.
        {`We'd love to talk about how we can help you.`}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      </Typography>
    </Container>

    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 10, md: 15 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        bgcolor: 'background.neutral',
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            gap: 4,
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display: 'grid',
            // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
            gridTemplateColumns: {
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              xs: 'repeat(1, 1fr)',
              // @ts-expect-error TS(2304): Cannot find name 'sm'.
              sm: 'repeat(2, 1fr)',
              // @ts-expect-error TS(2304): Cannot find name 'md'.
              md: 'repeat(3, 1fr)',
            },
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(2709): Cannot use namespace 'OfficeCard' as a type.
          {_offices.map((office: any) => <OfficeCard key={office.id} office={office} />)}
        </Box>
      </Container>
    </Box>
  </>;
}

// ----------------------------------------------------------------------

function OfficeCard({
  office
}: any) {
  const { country, address, photo, email, phoneNumber } = office;

  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={m.div}
      // @ts-expect-error TS(2304): Cannot find name 'whileHover'.
      whileHover="hover"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'overflow'.
        overflow: 'hidden',
        '&:hover': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          boxShadow: (theme: any) => theme.customShadows.z24,
        },
      }}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box sx={{ overflow: 'hidden' }}>
        // @ts-expect-error TS(2503): Cannot find namespace 'm'.
        <m.div variants={varHover()} transition={varTranHover()}>
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <Image src={photo} alt={country} ratio="4/3" />
        </m.div>
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1.5} sx={{ p: 3 }} component={m.div} variants={{ hover: { opacity: 0.8 } }}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5" sx={{ mb: 0.5 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {country}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={0.5}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Address
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Link sx={{ lineHeight: 0 }}>
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              <Iconify icon="carbon:launch" width={18} sx={{ ml: 1 }} />
            </Link>
          </Stack>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {address}
          </Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={0.5}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:mobile" width={24} sx={{ mr: 1 }} /> Phone
          </Stack>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {phoneNumber}
          </Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={0.5}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> Email
          </Stack>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {email}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

OfficeCard.propTypes = {
  office: PropTypes.shape({
    address: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    photo: PropTypes.string,
  }),
};
