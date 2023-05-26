import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Container, Typography, Card, Box, IconButton } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'];

const SERVICES = [
  {
    name: 'SEO',
    icon: '/assets/icons/service/ic_service_seo.svg',
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
  {
    name: 'Email Marketing',
    icon: '/assets/icons/service/ic_service_mail.svg',
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
  {
    name: 'Search Engine Oprimization',
    icon: '/assets/icons/service/ic_service_analysis.svg',
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
  {
    name: 'Social Marketing',
    icon: '/assets/icons/service/ic_service_bullhorn.svg',
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={3}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          maxWidth: 480,
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: { xs: 8, md: 5 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mx: { xs: 'auto', md: 'unset' },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Our'.
          Our Services
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="h2">We Provide</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Typography sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Nunc'.
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
        </Typography>
      </Stack>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          gap: 4,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(4, 1fr)',
          },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        {SERVICES.map((service: any, index: any) => (
          // @ts-expect-error TS(2709): Cannot use namespace 'ServiceItem' as a type.
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({
  service,
  index
}: any) {
  const { name, icon, content, path } = service;

  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        px: 4,
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: 5,
        // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
        textAlign: 'center',
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(index === 1 && {
          py: { xs: 5, md: 8 },
        }),
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(index === 2 && {
          py: { xs: 5, md: 10 },
          boxShadow: (theme: any) => ({
            md: theme.customShadows.z24
          }),
        }),
      }}
    >
      <SvgColor
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        src={icon}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: 88,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 88,
          // @ts-expect-error TS(2304): Cannot find name 'mx'.
          mx: 'auto',
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color: (theme: any) => theme.palette[COLORS[index]].main,
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1} sx={{ my: 5 }}>
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <TextMaxLine variant="h6">{name}</TextMaxLine>
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {content}
        </TextMaxLine>
      </Stack>

      <IconButton
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component={NextLink}
        // @ts-expect-error TS(2304): Cannot find name 'href'.
        href={path}
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color={
          // @ts-expect-error TS(2304): Cannot find name 'index'.
          (index === 0 && 'primary') ||
          // @ts-expect-error TS(2304): Cannot find name 'index'.
          (index === 1 && 'secondary') ||
          // @ts-expect-error TS(2304): Cannot find name 'index'.
          (index === 2 && 'success') ||
          'warning'
        }
      >
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="carbon:direction-straight-right" />
      </IconButton>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    content: PropTypes.string,
    icon: PropTypes.node,
    name: PropTypes.string,
    path: PropTypes.string,
  }),
};
