// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, Divider, Typography, Box } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/logo' or its co... Remove this comment to see the full error message
import Logo from 'src/components/logo';
//
import { AuthWithSocial, AuthCarousel, AuthLoginForm } from '../components';

// ----------------------------------------------------------------------

export default function LoginCoverView() {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack direction="row" sx={{ minHeight: 1 }}>
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: { xs: 1, md: 480 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: (theme: any) => ({
            xs: theme.spacing(5, 2),
            md: theme.spacing(8, 10)
          }),
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        <Logo />

        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            pb: 5,
            // @ts-expect-error TS(2304): Cannot find name 'pt'.
            pt: { xs: 5, md: 10 },
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h3" paragraph>
            // @ts-expect-error TS(2304): Cannot find name 'Login'.
            Login
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2349): This expression is not callable.
            {`Don’t have an account? `}
            // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Link
              // @ts-expect-error TS(2304): Cannot find name 'component'.
              component={NextLink}
              // @ts-expect-error TS(2304): Cannot find name 'href'.
              href={paths.registerCover}
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              variant="subtitle2"
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              color="primary"
            >
              // @ts-expect-error TS(2304): Cannot find name 'Get'.
              Get started
            </Link>
          </Typography>
        </Stack>

        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <AuthWithSocial />

        // @ts-expect-error TS(2749): 'Divider' refers to a value, but is being used as ... Remove this comment to see the full error message
        <Divider sx={{ py: 3 }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(2304): Cannot find name 'OR'.
            OR
          </Typography>
        </Divider>

        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <AuthLoginForm />
      </Box>

      <AuthCarousel
        // @ts-expect-error TS(2304): Cannot find name 'title'.
        title="Hi, Welcome Back"
        // @ts-expect-error TS(2304): Cannot find name 'images'.
        images={[
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          '/assets/images/travel/travel_post_01.jpg',
          '/assets/images/travel/travel_post_03.jpg',
        ]}
      />
    </Stack>
  );
}
